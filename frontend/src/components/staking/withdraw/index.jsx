import { useState } from "react";
import { Button, Input } from "../../common";
import Subtitle from "../../common/subtitle";

export default function Withdraw ({connection}) {

    const [withdrawAmount, setWithdrawAmount] = useState(10);
    
    async function handleWithdraw (e) {
        e.preventDefault();
        if (connection.connected){
            alert("minted");
        }else{
            alert("you are not connected");
        }
    }

    return (<>
            <Subtitle>Withdraw</Subtitle>
            <form onSubmit={handleWithdraw}>
                <Input value={withdrawAmount} setValue={setWithdrawAmount} />
                <Button>Withdraw tokens</Button>
            </form>
        </>
    )
}
