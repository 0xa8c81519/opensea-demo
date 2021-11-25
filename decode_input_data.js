// const Web3 = require('web3');
const ethers = require('ethers');
const data = "0xbbbfa60c00000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000003e0000000000000000000000000000000000000000000000000000000000000072000000000000000000000000000000000000000000000000000000000000007a000000000000000000000000000000000000000000000000000000000000008200000000000000000000000007ceb23fd6bc0add59e62ac25578270cff1b9f6190000000000000000000000007b62d4859a83079d2156fc9c7659c9046ffffe750000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f715beb51ec8f63317d66f491e37e7bb048fcc2d000000000000000000000000f715beb51ec8f63317d66f491e37e7bb048fcc2d0000000000000000000000000000000000000000000000000001c6bf5263400000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000628c9107000000000000000000000000000000000000000000000000000be6ddbaede01200000000000000000000000000000000000000000000000000000000000001c0000000000000000000000000000000000000000000000000000000000000022000000000000000000000000000000000000000000000000000000000000002a000000000000000000000000000000000000000000000000000000000000002e00000000000000000000000000000000000000000000000000000000000000024f47261b00000000000000000000000007ceb23fd6bc0add59e62ac25578270cff1b9f6190000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000440257179200000000000000000000000066194b1abcbfbedd83841775404b245c8f9e4183000000000200000000000000000000000000000000000000000000000000da02000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f81f6b3aeaf4240e6d628164f1a070bdace53c4a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f715beb51ec8f63317d66f491e37e7bb048fcc2d000000000000000000000000f715beb51ec8f63317d66f491e37e7bb048fcc2d00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000001c6bf5263400000000000000000000000000000000000000000000000000000000b5e620f4800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000628c9107000000000000000000000000000000000000000000000000009bedaeed83efee00000000000000000000000000000000000000000000000000000000000001c0000000000000000000000000000000000000000000000000000000000000024000000000000000000000000000000000000000000000000000000000000002a0000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000000440257179200000000000000000000000066194b1abcbfbedd83841775404b245c8f9e4183000000000200000000000000000000000000000000000000000000000000da02000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024f47261b00000000000000000000000007ceb23fd6bc0add59e62ac25578270cff1b9f619000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024f47261b00000000000000000000000007ceb23fd6bc0add59e62ac25578270cff1b9f619000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000421cf15b3dbc125e10f0fd9b903318d46d98853603412488a9e3a64859d082ba65243026cc3ee65bcd259eea3199d4cdd56a324460a8b7144adc49c7fae2632b3a2b0300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000421b171bace9c14b9bde1b6e32cd19d93fa9277546208afa93d102d135c7f5f8797524408088ce0acc3533dc159a78b3f9f5015aa847b02f7811af92e157a4e6fa8f030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000b08e3e7cc815213304d884c88ca476ebc50eaab200000000000000000000000000000000000000000000000000000b5e620f4800";
// let r = Web3.utils.toAscii(data);
// let abiCoder = new ethers.utils.AbiCoder();
// let r = abiCoder.decode(
// 	['bytes', 'string'],
// 	ethers.utils.hexDataSlice(data, 4)
// );
// console.log(r.length);
// console.log(r.indexOf(0).length);
// console.log(r.indexOf(1).length);
let abi = [{ "inputs": [{ "internalType": "address", "name": "exchange", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "getExchange", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "isOwner", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "components": [{ "internalType": "address", "name": "makerAddress", "type": "address" }, { "internalType": "address", "name": "takerAddress", "type": "address" }, { "internalType": "address", "name": "feeRecipientAddress", "type": "address" }, { "internalType": "address", "name": "senderAddress", "type": "address" }, { "internalType": "uint256", "name": "makerAssetAmount", "type": "uint256" }, { "internalType": "uint256", "name": "takerAssetAmount", "type": "uint256" }, { "internalType": "uint256", "name": "makerFee", "type": "uint256" }, { "internalType": "uint256", "name": "takerFee", "type": "uint256" }, { "internalType": "uint256", "name": "expirationTimeSeconds", "type": "uint256" }, { "internalType": "uint256", "name": "salt", "type": "uint256" }, { "internalType": "bytes", "name": "makerAssetData", "type": "bytes" }, { "internalType": "bytes", "name": "takerAssetData", "type": "bytes" }, { "internalType": "bytes", "name": "makerFeeAssetData", "type": "bytes" }, { "internalType": "bytes", "name": "takerFeeAssetData", "type": "bytes" }], "internalType": "struct LibOrder.Order", "name": "leftOrder", "type": "tuple" }, { "components": [{ "internalType": "address", "name": "makerAddress", "type": "address" }, { "internalType": "address", "name": "takerAddress", "type": "address" }, { "internalType": "address", "name": "feeRecipientAddress", "type": "address" }, { "internalType": "address", "name": "senderAddress", "type": "address" }, { "internalType": "uint256", "name": "makerAssetAmount", "type": "uint256" }, { "internalType": "uint256", "name": "takerAssetAmount", "type": "uint256" }, { "internalType": "uint256", "name": "makerFee", "type": "uint256" }, { "internalType": "uint256", "name": "takerFee", "type": "uint256" }, { "internalType": "uint256", "name": "expirationTimeSeconds", "type": "uint256" }, { "internalType": "uint256", "name": "salt", "type": "uint256" }, { "internalType": "bytes", "name": "makerAssetData", "type": "bytes" }, { "internalType": "bytes", "name": "takerAssetData", "type": "bytes" }, { "internalType": "bytes", "name": "makerFeeAssetData", "type": "bytes" }, { "internalType": "bytes", "name": "takerFeeAssetData", "type": "bytes" }], "internalType": "struct LibOrder.Order", "name": "rightOrder", "type": "tuple" }, { "internalType": "bytes", "name": "leftSignature", "type": "bytes" }, { "internalType": "bytes", "name": "rightSignature", "type": "bytes" }, { "components": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "paymentTokenAmount", "type": "uint256" }], "internalType": "struct ZeroExFeeWrapper.FeeData[]", "name": "feeData", "type": "tuple[]" }, { "internalType": "address", "name": "paymentTokenAddress", "type": "address" }], "name": "matchOrders", "outputs": [{ "internalType": "bytes", "name": "", "type": "bytes" }], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "target", "type": "address" }, { "internalType": "bytes", "name": "callData", "type": "bytes" }], "name": "proxyCall", "outputs": [{ "internalType": "bytes", "name": "", "type": "bytes" }], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "exchange", "type": "address" }], "name": "setExchange", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "bool", "name": "isOwner", "type": "bool" }], "name": "setOwner", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];
let inter = new ethers.utils.Interface(abi);
let jsonRpcProvider = new ethers.providers.JsonRpcProvider('https://polygon-rpc.com/');
jsonRpcProvider.getTransaction('0xae58c3d3b79e3ff918453e91526ed1a98671c0c053423a70d8b624ea360061a9').then(tx => {
	let decodeInput = inter.parseTransaction({ data: tx.data, vaule: tx.value });
	console.log(decodeInput);
});