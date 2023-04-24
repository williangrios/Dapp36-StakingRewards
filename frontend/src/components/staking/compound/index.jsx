import { Button, Divisor } from "../../common";
import Subtitle from "../../common/subtitle";

const Compound = ()=> {

    const handleCompound = (e)=> {
        e.preventDefault();
    }

    return (<>
            <Subtitle>Compound</Subtitle>
            <form onSubmit={handleCompound}>
                <Button>Compound tokens</Button>
            </form>
            <Divisor/>
        </>
    )
}

export default Compound;