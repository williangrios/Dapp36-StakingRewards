import { Button, Divisor } from "../../common";
import Subtitle from "../../common/subtitle";

export default function Compound({ connection }) {
    async function handleCompound(e) {
        e.preventDefault();
        if (connection.connected) {
            alert("minted");
        } else {
            alert("you are not connected");
        }
    }

    return (
        <>
            <Subtitle>Compound</Subtitle>
            <form onSubmit={handleCompound}>
                <Button>Compound tokens</Button>
            </form>
            <Divisor />
        </>
    );
}
