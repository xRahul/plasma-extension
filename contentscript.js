const Web3 = require('web3');
const createProvider = require('metamask-extension-provider');
const provider = createProvider()

web3 = new Web3(provider)
web3.eth.getAccounts().then((accounts) => {
  return web3.eth.sign('Hello!', accounts[0]);
}).then((signature) => {
  console.log(signature);
});
