import { useState } from "react";
import { Button, Divisor, Input } from "../../common";
import Subtitle from "../../common/subtitle";
import { stakingAddress } from "../../../utils/addresses";
import { ethers } from "ethers";

export default function Deposit({ connection, loading, setLoading }) {
    const [depositAmount, setDepositAmount] = useState(10);

    async function handleDeposit(e) {
        e.preventDefault();
        if (connection.connected) {
            try {
                setLoading(true);
                const txAllowance = await connection.erc20Contract.approve(
                    stakingAddress,
                    ethers.utils.formatEther( depositAmount)
                );
                await txAllowance.wait();
                alert("aprovado, agora vamos fazer stake");
                const tx = await connection.stakingContract.deposit(
                    depositAmount
                );
                console.log(tx);
                await tx.wait();
                alert("Pronto, foi feito o stake");
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        } else {
            alert("you are not connected");
        }
    }

    return (
        <>
            <Subtitle>Deposit</Subtitle>
            <form onSubmit={(e) => handleDeposit(e)}>
                <Input value={depositAmount} setValue={setDepositAmount} />
                <Button loading={loading}>Deposit tokens</Button>
            </form>
            <Divisor />
        </>
    );
}
