import { Button, Divisor, Subtitle } from "../../common";


const Mint = () => {

    const handleMint = (e)=> {
        e.preventDefault();
        alert("minted");
    }

    return(<>
        <Subtitle>Mint ERC20 Token</Subtitle>
        <form onSubmit={handleMint}>
            <Button>Mint 100,000 tokens</Button>
        </form>
    </>
    )
}

export default Mint;