//SPDX-License-Identifier: MIT
pragma solidity >=0.8.7;

contract SimpleWallet {
    uint public balance;

    function deposit() public payable {
        balance += msg.value;
    }

    function getWalletBalance() public view returns (uint) {
        return address(this).balance;
    }

    function withdrawAll() public {
        address payable to = payable(msg.sender);
        to.transfer(getWalletBalance());
    }

    function withdrawAllToAddress(address payable to) public {
        to.transfer(getWalletBalance());
    }
}
