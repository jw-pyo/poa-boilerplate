const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());


class Car {
    park() {
        return 'Stopped';
    }

    drive() {
        return 'vroom';
    }
}

// pre-initialization
let car;
let accounts;


beforeEach(async () => {
    car = await new Car();
});


describe('Car Class', () => {

    it('#1. park()', () => {
        assert.equal(car.park(), 'stopped');
    });

    it('#2. drive()', () => {
        assert.equal(car.drive(), 'vroom');
    });
});
