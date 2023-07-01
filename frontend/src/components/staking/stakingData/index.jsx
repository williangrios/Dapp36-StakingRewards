import React, { useEffect, useState } from "react";
import { Subtitle } from "../../common";
import { getAlchemyProvider } from "../../../utils/web3";
import { ethers } from "ethers";
import { stakingAddress } from "../../../utils/addresses";
import StakingContract from "../../../artifacts/contracts/ERC20Staking.sol/ERC20Staking.json";

export default function StakingData({ connection }) {
    const [contractStakingData, setContractStakingData] = useState({
        totalStaked: 0,
        rewardsPerHour: 0,
        totalRewards: 0,
    });

    const [userStakingData, setUserStakingData] = useState({
        userTokensInStake: 0,
        userRewards: 0
    });

    async function getContractData() {
        const alchemyProvider = await getAlchemyProvider();
        const contract = new ethers.Contract(
            stakingAddress,
            StakingContract.abi,
            alchemyProvider
        );
        const response = {
            totalStaked: (await contract.totalStaked()).toString(),
            rewardsPerHour: (await contract.rewardsPerHour()).toString(),
            totalRewards: (await contract.totalRewards()).toString(),
        };
        console.log(response);
        setContractStakingData(response);
    }

    async function getUserStakingData() {
        const response = {
            userTokensInStake: (await connection.stakingSigner.balanceOf(connection.account)).toString(),
            userRewards: (await connection.stakingSigner.rewards(connection.account)).toString()
        }
        setUserStakingData(response);
    }

    useEffect(() => {
        getContractData();
        if (connection.connected) getUserStakingData();
    }, [connection]);

    return (
        <>
            <Subtitle>Contract Data</Subtitle>
            <p>Total staked: {contractStakingData.totalStaked}</p>
            <p>Rewards per hour: {contractStakingData.rewardsPerHour}</p>
            <p>Total rewards: {contractStakingData.totalRewards}</p>
            {connection.connected && (
                <>
                    <Subtitle>Your Data</Subtitle>
                    <p>Your tokens in stake: { userStakingData.userTokensInStake}</p>
                    <p>Rewards: {userStakingData.userRewards}</p>
                    <p></p>
                </>
            )}
        </>
    );
}
