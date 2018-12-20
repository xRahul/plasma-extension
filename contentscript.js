const web3 = require('./src/metamask-web3')
web3.eth.getAccounts().then((accounts) => {
  console.log(accounts)
})
