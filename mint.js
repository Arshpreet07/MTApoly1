// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/MetaToken.sol/MetaToken.json");

const tokenAddress = "0x208dD7B8c79948980b594872477d8c473134511b"; 
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x4F86BE27fe20d64Eb1D19eC310E7e2CACDAf4Cee";


async function main() {
    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    for (let i = 0; i < 5; i++) {
        const tx = await token.Minting(walletAddress);
        const receipt = await tx.wait();
 
    }
    console.log("Current Balance: " + await token.balanceOf(walletAddress) + " tokens");
    const desc =await token.promptDescription()
    console.log("The prompt description is : "+desc);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

