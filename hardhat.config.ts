import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "hardhat-deploy";
import { HardhatUserConfig } from "hardhat/config";
import { config as dotenvConfig } from "dotenv";
import path from "path";

dotenvConfig({ path: path.resolve(__dirname, "./.env") });

const config: HardhatUserConfig = {
  networks: {
    hardhat: {
      chainId: 55555,
      forking: {
        url: "https://rei-rpc.moonrhythm.io",
      },
    },
    rei: {
      url: "https://rei-rpc.moonrhythm.io",
      chainId: 55555,
    },
    polygon: {
      url: "https://polygon-rpc.com",
      chainId: 137,
    },
    bsc: {
      url: "https://bsc-dataseed.binance.org",
      chainId: 56,
    },
    bkc: {
      url: "https://rpc.bitkubchain.io",
      chainId: 96,
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY || "123",
    customChains: [
      {
        network: "rei",
        chainId: 55555,
        urls: {
          apiURL: "https://reiscan.com/api",
          browserURL: "https://reiscan.com/",
        },
      },
    ],
  },
  solidity: "0.8.17",
};

export default config;
