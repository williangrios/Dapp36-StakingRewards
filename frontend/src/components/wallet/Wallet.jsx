import React, { useState } from "react";
import { Button, Subtitle } from "../common";
import { connectWallet } from "../../utils/web3";

export default function Wallet({ connection, setConnection }) {
    async function handleConnect(e) {
        e.preventDefault();
        await connectWallet().then((data) => setConnection(data));
    }
    function handleDisconnect(e) {
        e.preventDefault();
        setConnection({
            connected: false,
            account: "",
            provider: null,
            erc20Signer: null,
            stakingSigner: null,
        });
    }

    return (
        <div>
            <Subtitle>Wallet</Subtitle>
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
