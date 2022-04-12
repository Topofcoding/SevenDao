import { ethers } from "ethers";
import { getAddresses } from "../../constants";
import { SVCContract} from "../../abi";
import { DaiContract } from "../../abi";
import { DaoContract } from "../../abi";
import { setAll } from "../../helpers";

import { createSlice, createSelector, createAsyncThunk } from "@reduxjs/toolkit";
import { JsonRpcProvider, StaticJsonRpcProvider } from "@ethersproject/providers";
import { Networks } from "../../constants/blockchain";
import { RootState } from "../store";
import { trim } from "../../helpers"
interface ILoadAccountDetails {
    address: string;
    networkID: Networks;
    provider: StaticJsonRpcProvider | JsonRpcProvider;
}

interface IUserAccountDetails {
    balances: {
        svc: number;
        svcAllowed: number;
        dai: number;
        daiAllowed: number;
        withdrawAvailable: boolean;
        nodes: Array<any>;
        numNodes: number;
        lastWithdraw: number;
        claimableReward: string;
    };
}

export const loadAccountDetails = createAsyncThunk("account/loadAccountDetails", async ({ networkID, provider, address }: ILoadAccountDetails): Promise<IUserAccountDetails> => {
    
    
    const addresses = getAddresses(networkID);
    const svcContract = new ethers.Contract(addresses.SVC_ADDRESS, SVCContract, provider);
    const svcBalance = (await svcContract.balanceOf(address)) / Math.pow(10,18);
    const svcAllowed = (await svcContract.allowance(address, addresses.DAO_ADDRESS)) / Math.pow(10,18);

    const daiContract = new ethers.Contract(addresses.DAI_ADDRESS,DaiContract,provider);
    const daiBalance = (await daiContract.balanceOf(address)) / Math.pow(10,18);
    const daiAllowed = (await daiContract.allowance(address, addresses.DAO_ADDRESS)) / Math.pow(10,18);
    const daoContract = new ethers.Contract(addresses.DAO_ADDRESS, DaoContract, provider);
    const [nodes,numNodes,lastWithdraw,] = await daoContract.getAccount(address);

    const claimableReward = (await daoContract.estimateInterestToWithdraw(address)) / Math.pow(10,18);
    const withdrawAvailable = (await daoContract.isWithdrawalAvailable(address));
    return {
        balances: {
            svc: svcBalance,
            svcAllowed: svcAllowed,
            dai: daiBalance,
            daiAllowed: daiAllowed,
            withdrawAvailable: withdrawAvailable,
            nodes: nodes,
            numNodes: numNodes.toNumber(),
            lastWithdraw:  lastWithdraw.toNumber(),
            claimableReward: trim(claimableReward,5)
        },
    };
});


export interface IAccountSlice {   
    balances: {
        svc: string;
        svcAllowed: string;
        dai: string;
        daiAllowed: string;
        withdrawAvailable: boolean;
        nodes: any;
        numNodes: number;
        claimableReward: number;
    };
    loading: boolean;
}

const initialState: IAccountSlice = {
    loading: true,
    balances: { svc: "",svcAllowed: "", dai:"", daiAllowed: "",withdrawAvailable: false, numNodes: 0, claimableReward: 0,  nodes: Array<any>() }
};

const accountSlice = createSlice({

    name: "account",
    initialState,
    reducers: {
        fetchAccountSuccess(state, action) {
            setAll(state, action.payload);
        },
    },
    extraReducers: builder => {
        builder
            .addCase(loadAccountDetails.pending, state => {
                state.loading = true;
            })
            .addCase(loadAccountDetails.fulfilled, (state, action) => {
                setAll(state, action.payload);
                state.loading = false;
            })
            .addCase(loadAccountDetails.rejected, (state, { error }) => {
                state.loading = false;
                console.log(error);
            })
    },
});

export default accountSlice.reducer;

export const { fetchAccountSuccess } = accountSlice.actions;

const baseInfo = (state: RootState) => state.account;

export const getAccountState = createSelector(baseInfo, account => account);
