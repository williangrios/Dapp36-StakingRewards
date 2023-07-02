import { useEffect, useState } from "react";
import { Button, Subtitle } from "../../common";
import { getAlchemyProvider } from "../../../utils/web3";
import { tokenERC20Address } from "../../../utils/addresses";
import  ERC20Contract from "../../../artifacts/contracts/TokenERC20.sol/TokenERC20.json";
import { ethers } from "ethers";

export default function Mint({ connection }) {
    const [userBalance, setUserBalance] = useState('0')
    const [contractERC20Data, setContractERC20Data] = useState({ tokenName: '', tokenSymbol: '', totalSupply: '10', decimals: '10'})

    async function getContractData() {
        const alchemyProvider = await getAlchemyProvider();
        const contract = new ethers.Contract(
            tokenERC20Address,
            ERC20Contract.abi,
            alchemyProvider
        );
        const response = {
            tokenName: await contract.name(),
            tokenSymbol: await contract.symbol(),
            totalSupply: ethers.utils.formatEther( (await contract.totalSupply()).toString()),
            decimals: (await contract.decimals()).toString(),
        };
        setContractERC20Data(response);
    }

    async function getUserBalance(){
        try {  
            const response = ethers.utils.formatEther (await connection.erc20Contract.balanceOf(connection.account));            
            setUserBalance(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getContractData();
        console.log(connection);
        if (connection.connected) getUserBalance();
    }, [connection]);

    return (
        <>
            <Subtitle>Mint ERC20 Token</Subtitle>
            <p>Token name:{contractERC20Data.tokenName}</p>
            <p>Token symbol:{contractERC20Data.tokenSymbol}</p>
            <p>Total supply:{contractERC20Data.totalSupply}</p>
            <p>Decimals:{contractERC20Data.decimals}</p>
            {
                connection.connected && <p>Your balance: {userBalance}</p>
            }
            
        </>
    );
}
