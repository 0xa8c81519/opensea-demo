'use strict'

const web3 = require('web3');
const openSeaSdk = require('opensea-js');
const openSeaTypes=require('opensea-js/lib/types');
const provider = new web3.providers.HttpProvider('https://mainnet.infura.io/v3/4d1446a24a744518a10686badaa1119d');
const seaPort = new openSeaSdk.OpenSeaPort(provider, { networkName: openSeaSdk.Network.Main });
seaPort.api.getOrder({ side: openSeaTypes.OrderSide.Buy, asset_contract_address: '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D', token_id: 3074 }).then(order => {
    let accountAddress = "0xB0Cef4066a297656FFe722b5a0DEFCf7D23d528E"; // The buyer's wallet address, also the taker
    return seaPort.getFulfillOrderParameters({ order, accountAddress }).then(data => {
        console.log(data);
    });
});

