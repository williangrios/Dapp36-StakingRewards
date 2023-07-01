import { ethers } from "ethers";
import { stakingAddress, tokenERC20Address } from "./addresses";
import ERC20Contract from "../artifacts/contracts/TokenERC20.sol/TokenERC20.json";
import StakingContract from "../artifacts/contracts/ERC20Staking.sol/ERC20Staking.json";

export async function connectWallet() {
    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const userAccount = await provider.send('eth_requestAccounts', []);
        console.log('áqui');
        const ob = {
            connected: true,
            account: userAccount[0],
            provider: provider,
            erc20Signer: new ethers.Contract(tokenERC20Address, ERC20Contract.abi, provider.getSigner()),
            stakingSigner: new ethers.Contract(stakingAddress, StakingContract.abi, provider.getSigner())
        };
        console.log(ob);
        return ob
    } catch (error) {
        return (error.message)
    }
}

export async function getAlchemyProvider() {
    return new ethers.providers.JsonRpcProvider('https://polygon-mumbai.g.alchemy.com/v2/di4KdLr9SEe1oT-DO1muEFJzSsBWZD5F');
}