const Web3 = require('web3')
const createProvider = require('metamask-extension-provider')
const provider = createProvider()
module.exports = new Web3(provider)
