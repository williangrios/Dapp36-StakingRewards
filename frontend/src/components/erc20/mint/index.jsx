const Mint = () => {

    const handleMint = ()=> {
        alert("minted");
    }

    return(<>
        <h1>Mint ERC20 tokens</h1>
        <button onClick={handleMint}>Mint 100,000 tokens</button>
    </>
    )
}

export default Mint;