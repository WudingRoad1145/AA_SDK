import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import 'hardhat-deploy';

import * as fs from 'fs'

const mnemonicFileName = process.env.MNEMONIC_FILE ?? `${process.env.HOME}/.secret/testnet-mnemonic.txt`
let mnemonic = 'test '.repeat(11) + 'junk'
if (fs.existsSync(mnemonicFileName)) { mnemonic = fs.readFileSync(mnemonicFileName, 'ascii') }

function getNetwork1 (url: string): { url: string, accounts: string[] } {
  return {
    url,
    accounts: [mnemonic]
  }
}

function getNetwork (name: string): { url: string, accounts: string[] } {
  return getNetwork1(`https://${name}.infura.io/v3/${process.env.INFURA_ID}`)
  // return getNetwork1(`wss://${name}.infura.io/ws/v3/${process.env.INFURA_ID}`)
}

const config: HardhatUserConfig = {
  solidity: '0.8.17',
  networks: {
    mumbai: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/YdsNfZkPMSAefI7wwCnBFfXK0ZRz2F-k',
      chainId: 137,
    },
    goerli: {
      url: 'https://goerli.infura.io/v3/82995939089f40ea96ab17af5a7eecd1',
      accounts: ['117d021fdddd734bc45166d84d2cca6a5ddf9fe71b098445d44c8f09d0b47b7f'] 
    },
  },
}

export default config
