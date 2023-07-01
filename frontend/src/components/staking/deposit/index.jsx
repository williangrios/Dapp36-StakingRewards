import { useState } from "react";
import { Button, Divisor, Input } from "../../common";
import Subtitle from "../../common/subtitle";
import { stakingAddress } from "../../../utils/addresses";

export default function Deposit ({connection}){

    const [depositAmount, setDepositAmount] = useState(10);

    async function handleDeposit () {
        // e.preventDefault();
        if (connection.connected){
            try {
                console.log('iniciou');
                console.log(connection.erc20Signer);
                const bal = await connection.erc20Signer.balanceOf(connection.account);
                console.log(bal);
                const txAllowance = await connection.erc20Signer.approve(stakingAddress, depositAmount);
                await txAllowance.wait();
                const tx = await connection.stakingSigner.deposit(depositAmount);
                console.log(tx);
                await tx.wait();    
            } catch (error) {
                console.log(error);
            }
            
        }else{
            alert("you are not connected");
        }
    }

    return (<>
        <Subtitle>Deposit</Subtitle>
        <form onSubmit={handleDeposit}>
            <Input value={depositAmount} setValue={setDepositAmount} />
            <Button>Deposit tokens</Button>
        </form>
        <Divisor/>
    </>
    
    )
}
