# Yoshka🪆
Yoshka is a hackathon project aiming to redefine how songs are structured and valued. Built on the Celo blockchain and utilizing Bunzz for DApp deployment, it tokenizes song stems as NFTs, introducing layered ownership, value, and royalties management.

## Overview
This platform takes inspiration from the concept of Matryoshka dolls, with songs being comprised of individual stems or elements. While we represent the Digital Audio Workstation (DAW) interaction via stem uploads, the future may see more direct DAW integration.

## Key Features
- **Stem Uploads**: In the absence of a full DAW, users upload song stems, which represent individual components of a song.
- **Tokenization**: Each stem, and the assembled song, is tokenized as an NFT, embedding ownership within.
- **Royalty Management**: Through the NFTs, automated royalty distribution ensures contributors are recognized and compensated for their work.

## Technical Architecture

### 1. Backend (Python + FastAPI)
- Handles audio processing using the `pydub` library.
- Generates metadata for the consolidated song.
- Offers APIs for frontend interactions.

### 2. Frontend (React)
- Interface for stem uploads.
- Visualization of NFTs and their metadata.
- Interactions with the blockchain for NFT operations using `web3.js` or `ethers.js`.

### 3. Blockchain (Celo)
- Smart contracts (leaning towards the ERC-721 standard) for NFT management, including minting, transfers, and royalties.

## Workflow
1. **User Interaction**: Upload stems via the web platform.
2. **Audio Assembly**: Backend compiles stems to craft a song, appending corresponding metadata.
3. **Tokenization**: The song and its stems are each transformed into distinct NFTs on the Celo blockchain.

## Development Steps
1. **Python Backend**
   - Deploy FastAPI for a RESTful API setup.
   - Process audio inputs and structure metadata.
   - Explore `web3.py` integration for blockchain engagements.

2. **Frontend Development**
   - Incorporate React framework in celo composer for an interactive UI.
   - Integrate `web3.js` for Celo interactions, permitting users to mint and supervise NFTs.

3. **Smart Contract Development**
   - Develop using Solidity or Bunzz template contract.
   - Utilize OpenZeppelin for robust, standardized contracts.
   - Initiate contracts on Celo testnets for evaluations, progressing to the mainnet.

4. **Integration**
   - Facilitate smooth data transition between frontend, backend, and the Celo network.

## Future Directions
- **Automated Ownerless Stream Platform**: A seamless system where songs can be streamed directly and royalities are paid directly to authors based on the nested ownership system and user interactions and preferences can highlight a particular stem component.
- **Reusable Stems**: Envision each stem as a unique asset that can be utilized across various songs, amplifying its value and scope.
- **AI Curation of Stems**: Harness the power of AI for automatic curation, sorting, and recommendation of stems or song elements, providing a tailored experience for users.
- **Song Recognition**: Integrate advanced song recognition technology, akin to Shazam, that can identify songs, their stems, or specific components within them.
- Evolve storage options for audio components (e.g., AWS S3, IPFS).
- Incorporate user authentication and governance.
- Tighten integration with Celo for enhanced NFT operations.
- Prioritize rigorous testing, especially for smart contracts, ensuring airtight security and accurate royalty allocation.
