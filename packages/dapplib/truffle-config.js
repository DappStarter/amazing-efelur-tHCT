require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help future spot toy note night smile hockey process metal giggle'; 
let testAccounts = [
"0xe62b1348739029169ed32fd63e793ea490bbcb99d89ef9b4bd056706fba3a7fc",
"0xa074ae3aef45bef79f16e71a62362c0663d29fd54e5c4f7c2dff6e4739f61a36",
"0xab7ec886243348e554a4e415cf426a617715e667bd126024075b4ee8c92000d8",
"0xcc392abb1bb32a01aa1d052d42122a6c2a6b12dd117e5702d96533836f15d9a7",
"0xdd720a5f891fcb18f2d446535d402d45eab748a4a1041f39c83c3453d786b7e6",
"0x2a59e0413f6ef09cf147a151d246c5c63a9dcfc5528a5b912569c83c47b4d77e",
"0x5737788d87ec8c4402b1984bb8192a1da4409ac01371a344ab5bb775b24c7112",
"0xf39e3b07007ff4643c72e9319a269f1f8ade1a594d1e881446c0fd28b569334f",
"0x7c5d35619822384d86ae9a8728e512cd2bc281b2205d1bc327a9ddc09f7f02d6",
"0xf636c1d6c8629644ff70fc578de0224256234e22cc7d611a1ba74f681b217fae"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


