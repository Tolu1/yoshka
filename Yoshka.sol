// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Yoshka {
    enum MusicType { ASSET, SONG }

    struct MusicItem {
        MusicType musicType;
        string title;
        string description;
        address creator;
        string fileType;
        string duration;
        string thumbnailURI;
        string fileURI;
        uint256 dateOfCreation;
        uint256 initialPrice;
        uint8 royaltyPercentage;
        uint256[] ingredients;
    }

    mapping(uint256 => MusicItem) public musicItems;

    event NFTMinted(uint256 indexed tokenId, address indexed creator, string title);
    event OwnershipTransferred(uint256 indexed tokenId, address indexed previousOwner, address indexed newOwner);

    address private owner;
    mapping(address => bool) private admins;
    uint256 private nextTokenId;

    constructor() {
        owner = msg.sender;
        admins[msg.sender] = true;
        nextTokenId = 1;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    modifier onlyAdmin() {
        require(admins[msg.sender] || msg.sender == owner, "Only admins can call this function");
        _;
    }

    modifier onlyCreator(uint256 tokenId) {
        require(msg.sender == musicItems[tokenId].creator, "Only the creator can perform this action");
        _;
    }

    bool private locked;

    modifier noReentrancy() {
        require(!locked, "Reentrant call");
        locked = true;
        _;
        locked = false;
    }

    function transferOwnership(address newOwner) external onlyOwner {
        require(newOwner != address(0), "Invalid address");
        owner = newOwner;
    }

    function addAdmin(address newAdmin) external onlyOwner {
        require(newAdmin != address(0), "Invalid address");
        admins[newAdmin] = true;
    }

    function removeAdmin(address admin) external onlyOwner {
        require(admins[admin], "Not an admin");
        admins[admin] = false;
    }

    function mintNFT(
        MusicType _musicType,
        string memory _title,
        string memory _description,
        string memory _fileType,
        string memory _duration,
        string memory _thumbnailURI,
        string memory _fileURI,
        uint256 _initialPrice,
        uint8 _royaltyPercentage,
        uint256[] memory _ingredients
    ) external {
        uint256 tokenId = nextTokenId;
        nextTokenId++;

        MusicItem memory newItem = MusicItem({
            musicType: _musicType,
            title: _title,
            description: _description,
            creator: msg.sender,
            fileType: _fileType,
            duration: _duration,
            thumbnailURI: _thumbnailURI,
            fileURI: _fileURI,
            dateOfCreation: block.timestamp,
            initialPrice: _initialPrice,
            royaltyPercentage: _royaltyPercentage,
            ingredients: _ingredients
        });

        musicItems[tokenId] = newItem;

        emit NFTMinted(tokenId, msg.sender, _title);
    }

    function batchMintNFTs(
        MusicType[] memory _musicTypes,
        string[] memory _titles,
        string[] memory _descriptions,
        string[] memory _fileTypes,
        string[] memory _durations,
        string[] memory _thumbnailURIs,
        string[] memory _fileURIs,
        uint256[] memory _initialPrices,
        uint8[] memory _royaltyPercentages,
        uint256[][] memory _ingredients
    ) external {
        require(_musicTypes.length == _titles.length, "Arrays length mismatch");

        for (uint256 i = 0; i < _musicTypes.length; i++) {
            uint256 tokenId = nextTokenId;
            nextTokenId++;

            MusicItem memory newItem = MusicItem({
                musicType: _musicTypes[i],
                title: _titles[i],
                description: _descriptions[i],
                creator: msg.sender,
                fileType: _fileTypes[i],
                duration: _durations[i],
                thumbnailURI: _thumbnailURIs[i],
                fileURI: _fileURIs[i],
                dateOfCreation: block.timestamp,
                initialPrice: _initialPrices[i],
                royaltyPercentage: _royaltyPercentages[i],
                ingredients: _ingredients[i]
            });
            musicItems[tokenId] = newItem;

            emit NFTMinted(tokenId, msg.sender, _titles[i]);
        }
    }

    function batchTransferNFTs(uint256[] memory _tokenIds, address _to) external {
        for (uint256 i = 0; i < _tokenIds.length; i++) {
            require(msg.sender == musicItems[_tokenIds[i]].creator, "Only the creator can transfer");

            musicItems[_tokenIds[i]].creator = _to;

            emit OwnershipTransferred(_tokenIds[i], msg.sender, _to);
        }
    }

    function mintNFTWithPayment(
        MusicType _musicType,
        string memory _title,
        string memory _description,
        string memory _fileType,
        string memory _duration,
        string memory _thumbnailURI,
        string memory _fileURI,
        uint256 _initialPrice,
        uint8 _royaltyPercentage,
        uint256[] memory _ingredients
    ) external payable onlyAdmin noReentrancy {
        uint256 tokenId = nextTokenId;
        nextTokenId++;

        require(msg.value >= _initialPrice, "Insufficient payment");

        MusicItem memory newItem = MusicItem({
            musicType: _musicType,
            title: _title,
            description: _description,
            creator: msg.sender,
            fileType: _fileType,
            duration: _duration,
            thumbnailURI: _thumbnailURI,
            fileURI: _fileURI,
            dateOfCreation: block.timestamp,
            initialPrice: _initialPrice,
            royaltyPercentage: _royaltyPercentage,
            ingredients: _ingredients
        });

        musicItems[tokenId] = newItem;

        emit NFTMinted(tokenId, msg.sender, _title);

        // Refund excess payment
        if (msg.value > _initialPrice) {
            payable(msg.sender).transfer(msg.value - _initialPrice);
        }
    }
}
