export const abi = [
    {
        "type": "constructor",
        "stateMutability": "nonpayable"
    },
    {
        "name": "NFTMinted",
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "creator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "title",
                "type": "string"
            }
        ],
        "type": "event"
    },
    {
        "name": "OwnershipTransferred",
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "type": "event"
    },
    {
        "name": "OwnershipTransferred",
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "type": "event"
    },
    {
        "name": "addAdmin",
        "inputs": [
            {
                "internalType": "address",
                "name": "newAdmin",
                "type": "address"
            }
        ],
        "type": "function",
        "stateMutability": "nonpayable"
    },
    {
        "name": "batchMintNFTs",
        "inputs": [
            {
                "internalType": "enum Yoshka.MusicType[]",
                "name": "_musicTypes",
                "type": "uint8[]"
            },
            {
                "internalType": "string[]",
                "name": "_titles",
                "type": "string[]"
            },
            {
                "internalType": "string[]",
                "name": "_descriptions",
                "type": "string[]"
            },
            {
                "internalType": "string[]",
                "name": "_fileTypes",
                "type": "string[]"
            },
            {
                "internalType": "string[]",
                "name": "_durations",
                "type": "string[]"
            },
            {
                "internalType": "string[]",
                "name": "_thumbnailURIs",
                "type": "string[]"
            },
            {
                "internalType": "string[]",
                "name": "_fileURIs",
                "type": "string[]"
            },
            {
                "internalType": "uint256[]",
                "name": "_initialPrices",
                "type": "uint256[]"
            },
            {
                "internalType": "uint8[]",
                "name": "_royaltyPercentages",
                "type": "uint8[]"
            },
            {
                "internalType": "uint256[][]",
                "name": "_ingredients",
                "type": "uint256[][]"
            }
        ],
        "type": "function",
        "stateMutability": "nonpayable"
    },
    {
        "name": "batchTransferNFTs",
        "inputs": [
            {
                "internalType": "uint256[]",
                "name": "_tokenIds",
                "type": "uint256[]"
            },
            {
                "internalType": "address",
                "name": "_to",
                "type": "address"
            }
        ],
        "type": "function",
        "stateMutability": "nonpayable"
    },
    {
        "name": "batchTransferNFTsToAddress",
        "inputs": [
            {
                "internalType": "uint256[]",
                "name": "tokenIds",
                "type": "uint256[]"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            }
        ],
        "type": "function",
        "stateMutability": "nonpayable"
    },
    {
        "name": "burnNFT",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "type": "function",
        "stateMutability": "nonpayable"
    },
    {
        "name": "getMusicItemMetadata",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "outputs": [
            {
                "internalType": "enum Yoshka.MusicType",
                "name": "musicType",
                "type": "uint8"
            },
            {
                "internalType": "string",
                "name": "title",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "description",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "fileType",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "duration",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "thumbnailURI",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "fileURI",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "dateOfCreation",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "initialPrice",
                "type": "uint256"
            },
            {
                "internalType": "uint8",
                "name": "royaltyPercentage",
                "type": "uint8"
            },
            {
                "internalType": "uint256[]",
                "name": "ingredients",
                "type": "uint256[]"
            }
        ],
        "type": "function",
        "stateMutability": "view"
    },
    {
        "name": "getTotalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "type": "function",
        "stateMutability": "view"
    },
    {
        "name": "mintNFT",
        "inputs": [
            {
                "internalType": "enum Yoshka.MusicType",
                "name": "_musicType",
                "type": "uint8"
            },
            {
                "internalType": "string",
                "name": "_title",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_description",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_fileType",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_duration",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_thumbnailURI",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_fileURI",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_initialPrice",
                "type": "uint256"
            },
            {
                "internalType": "uint8",
                "name": "_royaltyPercentage",
                "type": "uint8"
            },
            {
                "internalType": "uint256[]",
                "name": "_ingredients",
                "type": "uint256[]"
            }
        ],
        "type": "function",
        "stateMutability": "nonpayable"
    },
    {
        "name": "mintNFTWithPayment",
        "inputs": [
            {
                "internalType": "enum Yoshka.MusicType",
                "name": "_musicType",
                "type": "uint8"
            },
            {
                "internalType": "string",
                "name": "_title",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_description",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_fileType",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_duration",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_thumbnailURI",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_fileURI",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_initialPrice",
                "type": "uint256"
            },
            {
                "internalType": "uint8",
                "name": "_royaltyPercentage",
                "type": "uint8"
            },
            {
                "internalType": "uint256[]",
                "name": "_ingredients",
                "type": "uint256[]"
            }
        ],
        "type": "function",
        "stateMutability": "payable"
    },
    {
        "name": "musicItems",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "outputs": [
            {
                "internalType": "enum Yoshka.MusicType",
                "name": "musicType",
                "type": "uint8"
            },
            {
                "internalType": "string",
                "name": "title",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "description",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "fileType",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "duration",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "thumbnailURI",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "fileURI",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "dateOfCreation",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "initialPrice",
                "type": "uint256"
            },
            {
                "internalType": "uint8",
                "name": "royaltyPercentage",
                "type": "uint8"
            }
        ],
        "type": "function",
        "stateMutability": "view"
    },
    {
        "name": "ownedNFTCount",
        "inputs": [
            {
                "internalType": "address",
                "name": "user",
                "type": "address"
            }
        ],
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "type": "function",
        "stateMutability": "view"
    },
    {
        "name": "ownedNFTs",
        "inputs": [
            {
                "internalType": "address",
                "name": "user",
                "type": "address"
            }
        ],
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "type": "function",
        "stateMutability": "view"
    },
    {
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "type": "function",
        "stateMutability": "view"
    },
    {
        "name": "pauseContract",
        "type": "function",
        "stateMutability": "nonpayable"
    },
    {
        "name": "removeAdmin",
        "inputs": [
            {
                "internalType": "address",
                "name": "admin",
                "type": "address"
            }
        ],
        "type": "function",
        "stateMutability": "nonpayable"
    },
    {
        "name": "renounceOwnership",
        "type": "function",
        "stateMutability": "nonpayable"
    },
    {
        "name": "setRoyaltyPercentage",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "uint8",
                "name": "newRoyaltyPercentage",
                "type": "uint8"
            }
        ],
        "type": "function",
        "stateMutability": "nonpayable"
    },
    {
        "name": "transferNFTOwnership",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "type": "function",
        "stateMutability": "nonpayable"
    },
    {
        "name": "transferOwnership",
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "type": "function",
        "stateMutability": "nonpayable"
    },
    {
        "name": "unpauseContract",
        "type": "function",
        "stateMutability": "nonpayable"
    },
    {
        "name": "updateNFTMetadata",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "newTitle",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "newDescription",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "newThumbnailURI",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "newFileURI",
                "type": "string"
            }
        ],
        "type": "function",
        "stateMutability": "nonpayable"
    },
    {
        "name": "upgradeContract",
        "inputs": [
            {
                "internalType": "address",
                "name": "newContractAddress",
                "type": "address"
            }
        ],
        "type": "function",
        "stateMutability": "nonpayable"
    },
    {
        "name": "withdrawBalance",
        "inputs": [
            {
                "internalType": "address payable",
                "name": "recipient",
                "type": "address"
            }
        ],
        "type": "function",
        "stateMutability": "nonpayable"
    }
] as const