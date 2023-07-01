import { useEffect } from "react";
import { Button, Subtitle } from "../../common";

export default function Mint({ connection }) {
    useEffect(() => {
        console.log(connection);
    }, []);

    async function handleMint(e) {
        e.preventDefault();
        if (connection.connected) {
            alert("minted");
        } else {
            alert("you are not connected");
        }
    }

    return (
        <>
            <Subtitle>Mint ERC20 Token</Subtitle>
            <p>Token name:</p>
            <p>Token symbol:</p>
            <p>Total supply:</p>
            <p>Decimals:</p>
            <form onSubmit={handleMint}>
                <Button>Mint 100,000 tokens</Button>
            </form>
        </>
    );
}
