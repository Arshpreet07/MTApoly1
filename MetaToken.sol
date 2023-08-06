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