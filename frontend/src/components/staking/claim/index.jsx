import { Button, Divisor } from "../../common";
import Subtitle from "../../common/subtitle";

export default function Claim({ connection }) {
    async function handleClaim(e) {
        e.preventDefault();
        if (connection.connected) {
            alert("minted");
        } else {
            alert("you are not connected");
        }
    }

    return (
        <>
            <Subtitle>Claim</Subtitle>
            <form onSubmit={handleClaim}>
                <Button>Claim tokens</Button>
            </form>
            <Divisor />
        </>
    );
}
