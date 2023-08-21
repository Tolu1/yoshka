// SPDX-License-Identifier: MIXED

// Sources flattened with hardhat v2.9.0 https://hardhat.org

// File @openzeppelin/contracts/utils/Context.sol@v4.3.2

// License-Identifier: MIT

pragma solidity ^0.8.0;

/**
 * @dev Provides information about the current execution context, including the
 * sender of the transaction and its data. While these are generally available
 * via msg.sender and msg.data, they should not be accessed in such a direct
 * manner, since when dealing with meta-transactions the account sending and
 * paying for execution may not be the actual sender (as far as an application
 * is concerned).
 *
 * This contract is only required for intermediate, library-like contracts.
 */
abstract contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes calldata) {
        return msg.data;
    }
}


// File @openzeppelin/contracts/access/Ownable.sol@v4.3.2

// License-Identifier: MIT

pragma solidity ^0.8.0;

/**
 * @dev Contract module which provides a basic access control mechanism, where
 * there is an account (an owner) that can be granted exclusive access to
 * specific functions.
 *
 * By default, the owner account will be the one that deploys the contract. This
 * can later be changed with {transferOwnership}.
 *
 * This module is used through inheritance. It will make available the modifier
 * `onlyOwner`, which can be applied to your functions to restrict their use to
 * the owner.
 */
abstract contract Ownable is Context {
    address private _owner;

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    /**
     * @dev Initializes the contract setting the deployer as the initial owner.
     */
    constructor() {
        _setOwner(_msgSender());
    }

    /**
     * @dev Returns the address of the current owner.
     */
    function owner() public view virtual returns (address) {
        return _owner;
    }

    /**
     * @dev Throws if called by any account other than the owner.
     */
    modifier onlyOwner() {
        require(owner() == _msgSender(), "Ownable: caller is not the owner");
        _;
    }

    /**
     * @dev Leaves the contract without owner. It will not be possible to call
     * `onlyOwner` functions anymore. Can only be called by the current owner.
     *
     * NOTE: Renouncing ownership will leave the contract without an owner,
     * thereby removing any functionality that is only available to the owner.
     */
    function renounceOwnership() public virtual onlyOwner {
        _setOwner(address(0));
    }

    /**
     * @dev Transfers ownership of the contract to a new account (`newOwner`).
     * Can only be called by the current owner.
     */
    function transferOwnership(address newOwner) public virtual onlyOwner {
        require(newOwner != address(0), "Ownable: new owner is the zero address");
        _setOwner(newOwner);
    }

    function _setOwner(address newOwner) private {
        address oldOwner = _owner;
        _owner = newOwner;
        emit OwnershipTransferred(oldOwner, newOwner);
    }
}


// File @openzeppelin/contracts/security/ReentrancyGuard.sol@v4.3.2

// License-Identifier: MIT

pragma solidity ^0.8.0;

/**
 * @dev Contract module that helps prevent reentrant calls to a function.
 *
 * Inheriting from `ReentrancyGuard` will make the {nonReentrant} modifier
 * available, which can be applied to functions to make sure there are no nested
 * (reentrant) calls to them.
 *
 * Note that because there is a single `nonReentrant` guard, functions marked as
 * `nonReentrant` may not call one another. This can be worked around by making
 * those functions `private`, and then adding `external` `nonReentrant` entry
 * points to them.
 *
 * TIP: If you would like to learn more about reentrancy and alternative ways
 * to protect against it, check out our blog post
 * https://blog.openzeppelin.com/reentrancy-after-istanbul/[Reentrancy After Istanbul].
 */
abstract contract ReentrancyGuard {
    // Booleans are more expensive than uint256 or any type that takes up a full
    // word because each write operation emits an extra SLOAD to first read the
    // slot's contents, replace the bits taken up by the boolean, and then write
    // back. This is the compiler's defense against contract upgrades and
    // pointer aliasing, and it cannot be disabled.

    // The values being non-zero value makes deployment a bit more expensive,
    // but in exchange the refund on every call to nonReentrant will be lower in
    // amount. Since refunds are capped to a percentage of the total
    // transaction's gas, it is best to keep them low in cases like this one, to
    // increase the likelihood of the full refund coming into effect.
    uint256 private constant _NOT_ENTERED = 1;
    uint256 private constant _ENTERED = 2;

    uint256 private _status;

    constructor() {
        _status = _NOT_ENTERED;
    }

    /**
     * @dev Prevents a contract from calling itself, directly or indirectly.
     * Calling a `nonReentrant` function from another `nonReentrant`
     * function is not supported. It is possible to prevent this from happening
     * by making the `nonReentrant` function external, and make it call a
     * `private` function that does the actual work.
     */
    modifier nonReentrant() {
        // On the first call to nonReentrant, _notEntered will be true
        require(_status != _ENTERED, "ReentrancyGuard: reentrant call");

        // Any calls to nonReentrant after this point will fail
        _status = _ENTERED;

        _;

        // By storing the original value once again, a refund is triggered (see
        // https://eips.ethereum.org/EIPS/eip-2200)
        _status = _NOT_ENTERED;
    }
}


// File contracts/Yoshka.sol

// License-Identifier: MIT
pragma solidity ^0.8.0;
contract Yoshka is Ownable {
    enum MusicType {
        ASSET,
        SONG
    }

    struct MusicItem {
        MusicType musicType;
        string title;
        string description;
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
    mapping(uint256 => address) private itemCreators;

    event NFTMinted(
        uint256 indexed tokenId,
        address indexed creator,
        string title
    );
    event OwnershipTransferred(
        uint256 indexed tokenId,
        address indexed previousOwner,
        address indexed newOwner
    );

    mapping(address => bool) private admins;
    uint256 private nextTokenId;

    bool private reentrancyLock = false;

    modifier onlyAdmin() {
        require(
            admins[msg.sender] || msg.sender == owner(),
            "Only admins can call this function"
        );
        _;
    }

    modifier noReentrancy() {
        require(!reentrancyLock, "Reentrant call");
        reentrancyLock = true;
        _;
        reentrancyLock = false;
    }

    constructor() {
        admins[msg.sender] = true;
        nextTokenId = 1;
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
        itemCreators[tokenId] = msg.sender;

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
            itemCreators[tokenId] = msg.sender;

            emit NFTMinted(tokenId, msg.sender, _titles[i]);
        }
    }

    function batchTransferNFTs(uint256[] memory _tokenIds, address _to)
        external
    {
        for (uint256 i = 0; i < _tokenIds.length; i++) {
            require(
                itemCreators[_tokenIds[i]] == msg.sender,
                "Only the creator can transfer"
            );

            itemCreators[_tokenIds[i]] = _to;

            emit OwnershipTransferred(_tokenIds[i], msg.sender, _to);
        }
    }

    function ownedNFTCount(address user) public view returns (uint256) {
        uint256 ownedCount = 0;
        for (uint256 tokenId = 1; tokenId < nextTokenId; tokenId++) {
            if (itemCreators[tokenId] == user) {
                ownedCount++;
            }
        }
        return ownedCount;
    }

    function ownedNFTs(address user) public view returns (uint256[] memory) {
        uint256 ownedCount = ownedNFTCount(user);
        uint256[] memory ownedNFTs = new uint256[](ownedCount);
        uint256 index = 0;
        for (uint256 tokenId = 1; tokenId < nextTokenId; tokenId++) {
            if (itemCreators[tokenId] == user) {
                ownedNFTs[index] = tokenId;
                index++;
            }
        }
        return ownedNFTs;
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
        itemCreators[tokenId] = msg.sender;

        emit NFTMinted(tokenId, msg.sender, _title);

        if (msg.value > _initialPrice) {
            payable(msg.sender).transfer(msg.value - _initialPrice);
        }
    }

    function getMusicItemMetadata(uint256 tokenId)
        external
        view
        returns (
            MusicType musicType,
            string memory title,
            string memory description,
            string memory fileType,
            string memory duration,
            string memory thumbnailURI,
            string memory fileURI,
            uint256 dateOfCreation,
            uint256 initialPrice,
            uint8 royaltyPercentage,
            uint256[] memory ingredients
        )
    {
        require(tokenId > 0 && tokenId < nextTokenId, "Invalid token ID");

        MusicItem memory musicItem = musicItems[tokenId];

        return (
            musicItem.musicType,
            musicItem.title,
            musicItem.description,
            musicItem.fileType,
            musicItem.duration,
            musicItem.thumbnailURI,
            musicItem.fileURI,
            musicItem.dateOfCreation,
            musicItem.initialPrice,
            musicItem.royaltyPercentage,
            musicItem.ingredients
        );
    }

    function distributeRoyalties(uint256 tokenId, uint256 salePrice) internal {
        require(tokenId > 0 && tokenId < nextTokenId, "Invalid token ID");

        address creator = itemCreators[tokenId];
        require(creator != address(0), "Invalid creator address");

        uint256 royaltyAmount =
            (salePrice * musicItems[tokenId].royaltyPercentage) / 100;
        payable(creator).transfer(royaltyAmount);
    }

    function updateNFTMetadata(
        uint256 tokenId,
        string memory newTitle,
        string memory newDescription,
        string memory newThumbnailURI,
        string memory newFileURI
    ) external onlyAdmin {
        require(tokenId > 0 && tokenId < nextTokenId, "Invalid token ID");

        MusicItem storage musicItem = musicItems[tokenId];

        musicItem.title = newTitle;
        musicItem.description = newDescription;
        musicItem.thumbnailURI = newThumbnailURI;
        musicItem.fileURI = newFileURI;
    }

    function burnNFT(uint256 tokenId) external {
        require(tokenId > 0 && tokenId < nextTokenId, "Invalid token ID");
        require(itemCreators[tokenId] == msg.sender, "Not the owner");

        delete musicItems[tokenId];
        delete itemCreators[tokenId];
    }

    function upgradeContract(address newContractAddress) external onlyOwner {
        payable(newContractAddress).transfer(address(this).balance);
        transferOwnership(newContractAddress);
    }

    bool private paused = false;

    modifier whenNotPaused() {
        require(!paused, "Contract is paused");
        _;
    }

    function pauseContract() external onlyAdmin {
        paused = true;
    }

    function unpauseContract() external onlyAdmin {
        paused = false;
    }

    function batchTransferNFTsToAddress(
        uint256[] memory tokenIds,
        address to
    ) external onlyAdmin {
        for (uint256 i = 0; i < tokenIds.length; i++) {
            uint256 tokenId = tokenIds[i];
            require(itemCreators[tokenId] != address(0), "Invalid token ID");

            itemCreators[tokenId] = to;

            emit OwnershipTransferred(tokenId, itemCreators[tokenId], to);
        }
    }

    function setRoyaltyPercentage(uint256 tokenId, uint8 newRoyaltyPercentage)
        external
        onlyAdmin
    {
        require(tokenId > 0 && tokenId < nextTokenId, "Invalid token ID");
        require(newRoyaltyPercentage <= 100, "Invalid royalty percentage");

        musicItems[tokenId].royaltyPercentage = newRoyaltyPercentage;
    }

    function withdrawBalance(address payable recipient) external onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No balance to withdraw");

        recipient.transfer(balance);
    }

    function transferNFTOwnership(uint256 tokenId, address newOwner)
        external
    {
        require(tokenId > 0 && tokenId < nextTokenId, "Invalid token ID");
        require(itemCreators[tokenId] == msg.sender, "Not the owner");

        itemCreators[tokenId] = newOwner;

        emit OwnershipTransferred(tokenId, msg.sender, newOwner);
    }

    function getTotalSupply() external view returns (uint256) {
        return nextTokenId - 1;
    }
}
