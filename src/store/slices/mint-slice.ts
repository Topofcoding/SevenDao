import { ethers, constants, Signer } from "ethers";
import { getAddresses } from "../../constants";
import { fetchPendingTxns, clearPendingTxn } from "./pending-txns-slice";
import { createSlice, createSelector, createAsyncThunk } from "@reduxjs/toolkit";
import { JsonRpcProvider, StaticJsonRpcProvider } from "@ethersproject/providers";
import { fetchAccountSuccess, loadAccountDetails } from "./account-slice";
import { Networks } from "../../constants/blockchain";
import { RootState } from "../store";
import { error, warning, success, info } from "./messages-slice";
import { messages } from "../../constants/messages";
import { getGasPrice } from "../../helpers/get-gas-price";
import { metamaskErrorWrap } from "../../helpers/metamask-error-wrap";
import { sleep } from "../../helpers";
import { BigNumber } from "ethers";
import { DaiContract, SVCContract, DaoContract } from "src/abi";
import { loadAppDetails } from "./app-slice";

interface IChangeApproval {
    token: "dai"| "svc";
    amount: number;
    provider: StaticJsonRpcProvider | JsonRpcProvider;
    networkID: Networks;
    address: string;
}

export const changeApproval = createAsyncThunk("bonding/changeApproval", async ({ token,amount, provider, networkID, address }: IChangeApproval, { dispatch }) => {
    
    if (!provider) {
        dispatch(warning({ text: messages.please_connect_wallet }));
        return;
    }

    const signer = provider.getSigner();
    const addresses = getAddresses(networkID);
    let tokenContract : any ;



    if(token == "dai") {
        tokenContract = new ethers.Contract(addresses.DAI_ADDRESS, DaiContract, signer);
    } else if(token == "svc") {
        tokenContract = new ethers.Contract(addresses.SVC_ADDRESS, SVCContract, signer);
    }

    let approveTx;
    try {
        const gasPrice = await getGasPrice(provider);
        const amountToApprove = ethers.utils.parseUnits(String(amount),18); 
        approveTx = await tokenContract.approve( addresses.DAO_ADDRESS,amountToApprove, { gasPrice });
        dispatch(
            fetchPendingTxns({
                txnHash: approveTx.hash,
                text: "Approving " + token,
                type: "approve_" + token,
            }),
        );
        await approveTx.wait();
        dispatch(success({ text: messages.tx_successfully_send }));
        await sleep(10);
        await dispatch(loadAccountDetails({ networkID, provider, address }));
    } catch (err: any) {
        metamaskErrorWrap(err, dispatch);
    } finally {
        if (approveTx) {
            dispatch(clearPendingTxn(approveTx.hash));
        }
    }

    await sleep(2);

});


interface IMintNode {
    type: number;
    address: string;
    networkID: Networks;
    provider: StaticJsonRpcProvider | JsonRpcProvider;
}
export const mintNode = createAsyncThunk("minting/mintNode", async ({ type, address, networkID, provider }: IMintNode, { dispatch }) => {
   
    const signer = provider.getSigner();
    const addresses = getAddresses(networkID);
    let value : number = 0; 
    let displayName : string = "";
    if ( type == 0 ) {
        value = 25;
        displayName = "Planck SVC";
    } else if( type == 1){
        value = 50;
        displayName = "Femto SVC";
    } else if( type == 2 ) {
        value = 75;
        displayName = "Pico SVC";
    } else if( type == 3 ) {
        value=100;
        displayName = "Nano SVC";
    } else if( type == 4 ) {
        value = 250;
        displayName = "Mini SVC";
    } else if ( type == 5 ) {
        value = 500;
        displayName = "Kilo SVC";
    } else if( type == 6 ) {
        value = 1000;
        displayName = "Mega SVC";
    } else if( type == 7 ) {
        value = 5000;
        displayName = "Giga SVC";
    }

    const valueInWei = ethers.utils.parseUnits(String(value),18);

    const daoContract = new ethers.Contract( addresses.DAO_ADDRESS, DaoContract, signer );

    let mintTx;
    try {
        const gasPrice = await getGasPrice(provider);
        
        mintTx = await daoContract.mintNode( address , valueInWei , valueInWei, type, { gasPrice });
        dispatch(
            fetchPendingTxns({
                txnHash: mintTx.hash,
                text: "Minting Node " + displayName,
                type: "mint_" + displayName,
            }),
        );
        await mintTx.wait();
        dispatch(success({ text: messages.tx_successfully_send }));
        dispatch(info({ text: messages.your_balance_update_soon }));
        await sleep(10);
        await dispatch(loadAccountDetails({ networkID, provider, address }));
        await dispatch(loadAppDetails({ networkID, provider }));
        dispatch(info({ text: messages.your_balance_updated }));
        return;
    } catch (err: any) {
        return metamaskErrorWrap(err, dispatch);
    } finally {
        if (mintTx) {
            dispatch(clearPendingTxn(mintTx.hash));
        }
    }
});

interface IClaimReward {
    address: string;
    networkID: Networks;
    provider: StaticJsonRpcProvider | JsonRpcProvider;
}

export const claimReward = createAsyncThunk("minting/claimReward", async ({ address, networkID, provider }: IClaimReward, { dispatch }) => {
    if (!provider) {
        dispatch(warning({ text: messages.please_connect_wallet }));
        return;
    }

    const signer = provider.getSigner();
    const addresses = getAddresses(networkID);
    const daoContract = new ethers.Contract( addresses.DAO_ADDRESS, DaoContract, signer );

    let claimTx;
    try {
        const gasPrice = await getGasPrice(provider);
        claimTx = await daoContract.withdrawInterest(address, { gasPrice });
        const pendingTxnType = "claim_reward";
        dispatch(
            fetchPendingTxns({
                txnHash: claimTx.hash,
                text: "Claim Reward",
                type: pendingTxnType,
            }),
        );
        await claimTx.wait();
        dispatch(success({ text: messages.tx_successfully_send }));
        await sleep(0.01);
        dispatch(info({ text: messages.your_balance_update_soon }));
        await sleep(10);
        await dispatch(loadAccountDetails({ networkID, provider, address }));
        dispatch(info({ text: messages.your_balance_updated }));
        return;
    } catch (err: any) {
        metamaskErrorWrap(err, dispatch);
    } finally {
        if (claimTx) {
            dispatch(clearPendingTxn(claimTx.hash));
        }
    }
});




