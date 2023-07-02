import React, { useState } from "react";
import { Button, Subtitle } from "../common";
import { connectWallet } from "../../utils/web3";

export default function Wallet({ connection, setConnection }) {

    async function handleConnect(e) {
        e.preventDefault();
        await connectWallet().then(async (data) => {
            setConnection(data);
        });
    }

    function handleDisconnect(e) {
        e.preventDefault();
        setConnection({
            connected: false,
            account: "",
            provider: null,
            signer: null,
            erc20Contract: null,
            stakingContract: null,
        });
    }

    return (
        <div>
            <Subtitle>Wallet</Subtitle>
            {connection?.message && <p>{connection.message}</p>}
            <p>
                Wallet status:{" "}
                {connection?.connected ? "Connected" : "Not connected"}
            </p>
            <p>{connection?.connected && "Addr: " + connection.account}</p>
            {!connection?.connected ? (
                <form onSubmit={handleConnect}>
                    <Button>Connect your wallet</Button>
                </form>
            ) : (
                <form onSubmit={handleDisconnect}>
                    <Button>Disconnect</Button>
                </form>
            )}
        </div>
    );
}
