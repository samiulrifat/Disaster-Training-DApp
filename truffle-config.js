module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",      // Localhost (Ganache)
      port: 8545,             // Ganache default port
      network_id: "*"         // Match any network id
    }
  },

  // Configure your Solidity compiler version to match your contract
  compilers: {
    solc: {
      version: "0.8.19"       // Use your contract's pragma solidity version
    }
  }
};
