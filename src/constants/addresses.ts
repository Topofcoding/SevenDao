import { Networks } from "./blockchain";

const MATIC_MAINNET = {
    SVC_ADDRESS:"0xA1C8501594aB44B91ed17590B958F79f92E78399",
    DAO_ADDRESS:"0x6476Be61EAd686BB8f39436F3878b2b33C888050",
    DAI_ADDRESS:"0x9C66AEa9A07e6A1C6740b07c238e583aBda45845"
};

export const getAddresses = (networkID: number) => {
    if (networkID === Networks.MATIC) return MATIC_MAINNET;
    throw Error("Network don't support");
};
