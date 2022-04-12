import { BigNumber, ethers } from "ethers";

import { getAddresses } from "../../constants";
import { DaoContract, SVCContract } from "../../abi";
import { setAll } from "../../helpers";
import { createSlice, createSelector, createAsyncThunk } from "@reduxjs/toolkit";
import { JsonRpcProvider } from "@ethersproject/providers";
import { RootState } from "../store";

interface ILoadAppDetails {
    networkID: number;
    provider: JsonRpcProvider;
}

export const loadAppDetails = createAsyncThunk(
    "app/loadAppDetails",
    //@ts-ignore
    async ({ networkID, provider }: ILoadAppDetails) => {

        const addresses = getAddresses(networkID);

        const daoContract = new ethers.Contract( addresses.DAO_ADDRESS, DaoContract, provider);
        const totalNodeNum =  (await daoContract.getTotalNodes()).toNumber();
        const svcContract = new ethers.Contract( addresses.SVC_ADDRESS, SVCContract, provider);
        const svcDaoBalance = (await svcContract.balanceOf( addresses.DAO_ADDRESS )) / Math.pow(10,18);

        return {
            totalNodeNum: totalNodeNum,
            svcDaoBalance: svcDaoBalance
        };
    },
);

const initialState = {
    loading: true,
};

export interface IAppSlice {
    totalNodeNum: number;
    svcDaoBalance: number;
    loading: boolean;
}

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        fetchAppSuccess(state, action) {
            setAll(state, action.payload);
        },
    },
    extraReducers: builder => {
        builder
            .addCase(loadAppDetails.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(loadAppDetails.fulfilled, (state, action) => {
                setAll(state, action.payload);
                state.loading = false;
            })
            .addCase(loadAppDetails.rejected, (state, { error }) => {
                state.loading = false;
                console.log(error);
            });
    },
});

const baseInfo = (state: RootState) => state.app;

export default appSlice.reducer;

export const { fetchAppSuccess } = appSlice.actions;

export const getAppState = createSelector(baseInfo, app => app);
