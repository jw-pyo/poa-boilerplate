const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const ropsten_provider = new HDWalletProvider(
    'MNEMONIC 10 words',
    'https://ropsten.infura.io/PRIVATE_KEY'
);

const web3 = new Web3(provider);
/*
const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode, arguments: ['Hi there!']})
        .send({ gas: '1000000', from: accounts[0] });

    console.log('Contract deployed to', result.options.address);
};
deploy();
*/



/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() {
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>')
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
    networks: {
        ropsten: {
            provider: ropsten_provider,
            network_id: '3',
            gas: 4500000,
            gasPrice: 10000000000,
        },
        development: {
            host: "localhost",
            port: 8545,
            network_id: "940512"
        }
    }
};
