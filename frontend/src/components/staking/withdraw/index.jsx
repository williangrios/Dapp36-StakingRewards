import { Button } from "../../common";
import Subtitle from "../../common/subtitle";

const Withdraw = ()=> {
    
    const handleWithdraw = (e)=> {
        e.preventDefault();
    }

    return (<>
            <Subtitle>Withdraw</Subtitle>
            <form onSubmit={handleWithdraw}>
                <Button>Withdraw tokens</Button>
            </form>
        </>
    )
}

export default Withdraw;