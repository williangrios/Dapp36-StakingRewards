import { ethers } from "ethers";
import { stakingAddress, tokenERC20Address } from "./addresses";
import ERC20Contract from "../artifacts/contracts/TokenERC20.sol/TokenERC20.json";
import StakingContract from "../artifacts/contracts/ERC20Staking.sol/ERC20Staking.json";

export async function connectWallet() {
    // if (!window.ethereum) return {connected: false, account: '', provider: null, erc20Signer: null, stakingAddress: null}
    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const userAccount = await provider.send('eth_requestAccounts', []);
        const signer = provider.getSigner();
        const erc20Contract = new ethers.Contract(tokenERC20Address, ERC20Contract.abi, provider.getSigner());
        const stakingContract = new ethers.Contract(stakingAddress, StakingContract.abi, provider.getSigner()); 
        console.log('áqui');
        const ob = {
            connected: true,
            account: userAccount[0],
            provider: provider,
            signer: signer,
            erc20Contract: erc20Contract,
            stakingContract: stakingContract
        };
        console.log(ob);
        return ob
    } catch (error) {
        return ({connected: false, message: error.message})
    }
}

export async function getAlchemyProvider() {
    return new ethers.providers.JsonRpcProvider('https://eth-goerli.g.alchemy.com/v2/G14slMsiJVBBPxe2LEjtvkpQHIEOiG9m');
}