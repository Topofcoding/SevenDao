import { Networks } from "../constants/blockchain";

const switchRequest = () => {
    return window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x13881" }],
    });
};

const addChainRequest = () => {
    return window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
            {
                chainId: "0x13881",
                chainName: "Mumbai",
                rpcUrls: ["https://matic-mumbai.chainstacklabs.com"],
                blockExplorerUrls: ["https://mumbai.polygonscan.com"],
                nativeCurrency: {
                    name: "MATIC",
                    symbol: "MATIC",
                    decimals: 18,
                },
            },
        ],
    });
};


// const switchRequest = () => {
//     return window.ethereum.request({
//         method: "wallet_switchEthereumChain",
//         params: [{ chainId: "0x89" }],
//     });
// };

// const addChainRequest = () => {
//     return window.ethereum.request({
//         method: "wallet_addEthereumChain",
//         params: [
//             {
//                 chainId: "0x89",
//                 chainName: "Polygon Mainnet",
//                 rpcUrls: ["https://polygon-rpc.com/"],
//                 blockExplorerUrls: ["https://polygonscan.com"],
//                 nativeCurrency: {
//                     name: "MATIC",
//                     symbol: "MATIC",
//                     decimals: 18,
//                 },
//             },
//         ],
//     });
// };


export const swithNetwork = async () => {
    if (window.ethereum) {
        try {
            await switchRequest();
        } catch (error: any) {
            if (error.code === 4902) {
                try {
                    await addChainRequest();
                    await switchRequest();
                } catch (addError) {
                    console.log(error);
                }
            }
            console.log(error);
        }
    }
};
