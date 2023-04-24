import { Button, Divisor } from "../../common";
import Subtitle from "../../common/subtitle";

const Deposit = ()=> {

    const handleDeposit = (e)=> {
        e.preventDefault();
    }

    return (<>
        <Subtitle>Deposit</Subtitle>
        <form onSubmit={handleDeposit}>
            <Button>Deposit tokens</Button>
        </form>
        <Divisor/>
    </>
    
    )
}

export default Deposit;