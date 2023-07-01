//SPDX-License-Identifier: None

pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract ERC20Staking { 
    //type declarations and state variables
    using SafeERC20 for IERC20;
    IERC20 public immutable token;
    uint public immutable rewardsPerHour = 10000; //0.01%
    uint public totalStaked = 0;
    mapping(address => uint) public balanceOf;
    mapping(address => uint) public lastUpdated;
    mapping(address => uint) public claimed;

    //events
    event Deposit(address account, uint amount);
    event Claim(address account, uint amount);
    event Compound(address account, uint amount);
    event Withdraw(address account, uint amount);

    //constructor
    constructor(IERC20 _token) {
        token = _token;
    }

    //functions
    function deposit(uint _amount) external {
        _compound();
        token.safeTransferFrom(msg.sender, address(this), _amount);
        balanceOf[msg.sender] += _amount;
        lastUpdated[msg.sender] = block.timestamp;
        totalStaked += _amount;
        emit Deposit(msg.sender, _amount);
    }

    function withdraw(uint amount) external {
        _compound();
        require(balanceOf[msg.sender] >= amount, "Insufficient funds");
        balanceOf[msg.sender] -= amount;
        totalStaked -= amount;
        token.safeTransfer(msg.sender, amount);
        emit Withdraw(msg.sender, amount);
    }

    function claim() external {
        uint amountToClaim = _rewards(msg.sender);
        claimed[msg.sender] += amountToClaim;
        lastUpdated[msg.sender] = block.timestamp;
        token.safeTransfer(msg.sender, amountToClaim);
        emit Claim(msg.sender, amountToClaim);
    }

    function compound() external {
        _compound();
    }

    function rewards(address account) external view returns (uint) {
        return _rewards(account);
    }

    function totalRewards() external view returns (uint) {
        return _totalRewards();
    }

    function _compound() internal {
        uint amountToCompound = _rewards(msg.sender);
        claimed[msg.sender] += amountToCompound;
        lastUpdated[msg.sender] = block.timestamp;
        balanceOf[msg.sender] += amountToCompound;
        totalStaked += amountToCompound;
        emit Compound(msg.sender, amountToCompound);
    }

    function _totalRewards() private view returns (uint) {
        return token.balanceOf(address(this)) - totalStaked;
    }

    function _rewards(address account) private view returns (uint) {
        return
            ((block.timestamp - lastUpdated[account]) * balanceOf[account]) /
            (rewardsPerHour * 1 hours);
    }
}
