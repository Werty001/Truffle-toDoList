module.exports = {
  networks: {
    development: {
      //Local host talking with Ganache Local Blockchain
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
    },
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
};
