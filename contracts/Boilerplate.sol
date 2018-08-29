pragma solidity ^0.4.24;

contract Boilerplate {

    string public gv_string;
    bool public gv_bool;
    mapping(address => uint256) public balances;

    constructor(string name) public {
        gv_string = name;
        balances[msg.sender] = 100000;
    }

    function getter() public view returns(string) {
        return gv_string;
    }

    function setter(string new_value) public returns(string) {
        gv_string = new_value;
        return gv_string;
    }

    function setter_two(string new_value, bool new_bool) public returns(bool) {
        gv_string = new_value;
        gv_bool = new_bool;
        return true;
    }

    function charge_balance() public returns(bool) {
        balances[msg.sender] += 10000;
        return true;
    }

    function get_balance(address account_) public view returns(uint256) {
        return balances[account_];
    }

    function transfer_token(address from, address to, uint256 amount) public returns(bool) {
        require(amount > 0);
        require(balances[from] >= amount);
        require(balances[to] + amount > balances[to]);
        balances[from] -= amount;
        balances[to] += amount;
        return true;
    }
}

