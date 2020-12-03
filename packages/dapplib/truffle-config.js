require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth saddle exact install casual force general'; 
let testAccounts = [
"0xf2ba9afba4b680208d921d7e7b44cc79989e86c22e8fdb8bc54cc9000ed43fbd",
"0x9b05bed1259fb211e7b072386fa31efa71fbff9a7a4b531028b8e71d7a29ad08",
"0x34049d0d1d71ed5173ad3c1aca12e0ec21a1fba8a67b6afce24d19a11c62e446",
"0x34f24b6a4f0909f50c8350c416101715f0780ab79b2e47505f832523728d9e5c",
"0x7ae0de46af60ba83b143b0baf691ee8d9d99359ff952ee2797914556f637d04e",
"0x7aff6c90f3f5080ab437fa521a600b59e58129148ab197efab533da8b034032c",
"0xd85f82467a4fa1d673d4e756f5e0c7fb91350d0ca7848ffc48e6f4702a781ab6",
"0xec6360d80808741b4860b8fdf4fa34bf079efc4a277a29be86cfdf46ca675c56",
"0xb2dfbd1405f4cf436164a0584b02dc634807745487eaa66c2bab8a2db59a3a07",
"0xd9157a9c8807b87038b5be0bf66efc8897bb8ed8fa92a2687f09dc527d32ab75"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
