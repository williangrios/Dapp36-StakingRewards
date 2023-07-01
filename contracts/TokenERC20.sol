//SPDX-License-Identifier: none
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenERC20 is ERC20{
    constructor() ERC20("WRTokenERC20", "WRT"){
        _mint(msg.sender, 100000 * 10 ** decimals());
    }
}
