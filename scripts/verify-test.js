require('dotenv').config();
const hre = require('hardhat');

const MASTER_CHEF = '';
const POLKA_CLASSIC_ADDRESS = '';
const DEV_ADDRESS = '';
const FEE_ADDRESS = '';
const POLKA_CLASSIC_PER_BLOCK = '300000000000000000';
const START_BLOCK = 8557015;

const verifyNativeTokenHolderVault = async () => {
  if (NATIVE_TOKEN_HOLDER_VAULT) {
    await hre.run('verify:verify', {
      address: NATIVE_TOKEN_HOLDER_VAULT
    })
  }
}

const masterchefVerify = async () => {
  if (MASTER_CHEF) {
    await hre.run('verify:verify', {
      address: MASTER_CHEF,
      constructorArguments: [
        POLKA_CLASSIC_ADDRESS,
        DEV_ADDRESS,
        FEE_ADDRESS,
        POLKA_CLASSIC_PER_BLOCK,
        START_BLOCK,
        NATIVE_TOKEN_HOLDER_VAULT
      ]
    })
  }
}

const main = async () => {
  await verifyNativeTokenHolderVault();
  await masterchefVerify();
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
