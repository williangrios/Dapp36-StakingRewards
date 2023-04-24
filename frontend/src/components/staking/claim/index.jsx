import { Button, Divisor } from "../../common";
import Subtitle from "../../common/subtitle";

const Claim = ()=> {

    const handleClaim = (e)=> {
        e.preventDefault();
    }

    return (<>
        <Subtitle>Claim</Subtitle>
        <form onSubmit={handleClaim}>
            <Button>Claim tokens</Button>
        </form>
        <Divisor/>
    </>
    )
}

export default Claim;