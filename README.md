# MTApoly1

For this project, we will deploy an NFT collection on the Ethereum blockchain, Map the collection to Polygon, and Transfer assets over via the Polygon Bridge. To put a twist on the project we use an image generation tool - like DALLE 2 or Midjourney - to the images for your NFTs.

## Description

this program is a simple ERC721 token which is an NFT collection which we deploy on eth blockchain. 

### Executing program

To run this program, you can use Remix, an online Solidity IDE. To get started, go to the Remix website at https://remix.ethereum.org/.

Once you are on the Remix website, create a new file by clicking on the "+" icon in the left-hand sidebar. Save the file with a .sol extension (e.g., HelloWorld.sol). Copy and paste the following code into the file:

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MetaToken is ERC721, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    constructor() ERC721("Meta", "MTA") {}

    string uri = "https://gateway.pinata.cloud/ipfs/QmayYF9SYgpAXhjVcRGiktu8HN6boGEwcCc94nD4G683Pm";

    string prompt = "a car drifting which is a bmw on an empty road m4 series";

    function Minting(address to) public onlyOwner returns(uint256 ){
        _tokenIds.increment();
        uint256 tokenId = _tokenIds.current();
        _safeMint(to, tokenId);
        return tokenId;
    }
    function promptDescription() external view returns (string memory) {
        return prompt;
    }
}

## Authors

Arshpreet Singh  
@Arshpreet07
