// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require('hardhat');
require('dotenv').config();

const MASTER_CHEF = '';
const POLKA_CLASSIC_ADDRESS = '0xf1a71bcce29b598d812a30baedff860a7dce0aff';
const DEV_ADDRESS = '0x6A482d254bb515674bC3d4Ef37D61353529ad1f4';
const FEE_ADDRESS = '0x6A482d254bb515674bC3d4Ef37D61353529ad1f4';
const POLKA_CLASSIC_PER_BLOCK = '300000000000000000';
const START_BLOCK = 8557015;

const deployMasterchef = async () => {
  if (POLKA_CLASSIC_ADDRESS) {
    const MasterchefContract = await hre.ethers.getContractFactory('Masterchef');
    const masterchefContract = await MasterchefContract.deploy(POLKA_CLASSIC_ADDRESS, DEV_ADDRESS, FEE_ADDRESS, POLKA_CLASSIC_PER_BLOCK, START_BLOCK, NATIVE_TOKEN_HOLDER_VAULT);

    await masterchefContract.deployed();
    console.log('[deployMasterchef] masterchefContract deployed to: ', masterchefContract.address);
  }
};

async function main() {
  await deployMasterchef();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
