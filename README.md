# Yoshka🪆
Yoshka aims to revolutionize the structure and valuation of songs. Using the Celo blockchain and Bunzz for smart contract deployment, it tokenizes song stems as NFTs, offering a fresh perspective on song ownership, value, and royalties management.

## Demo & Resources

🔗 **Live Demo**: [Yoshka Demo](https://yoshka.vercel.app/)  
📊 **Pitch Deck & Project Walkthrough**: [View Pitch Deck](#PitchDeck-Link-Here)  - coming very very soon

## Overview
Inspired by the layered design of Matryoshka dolls, songs on Yoshka are seen as composites of individual stems or elements. The current platform simulates a very basic workflow of a cloud-based Digital Audio Workstation (DAW) experience, where users can explore pre-featured stems and even contribute their unique creations and produce and release songs, we envision future iterations featuring direct DAW integration.

## Key Features

- **Stem Exploration**: Users can explore a rich collection of pre-featured stems.
- **Unique Stem Upload**: Opportunity to add personal, unique stems to the platform.
- **Tokenization**: Songs and their individual stems are tokenized as NFTs, encapsulating ownership.
- **Royalty Management**: Automated NFT-driven royalty system ensures fair compensation for contributors.

## Technical Architecture

### 1. Frontend (React)
- User-friendly interface for stem exploration and upload.
- Visual representation of NFTs and their metadata.
- Real-time interactions with the Celo blockchain for various NFT operations using `wagmi` or `ethers.js`.

### 2. Blockchain (Celo & Bunzz for deployemt)
- Employs smart contracts (predominantly adhering to the ERC-721 standard) for comprehensive NFT management, including minting, transfers, and royalty distribution.
- Deployment of smart contracts using Bunzz and documentation facilitated by DeCipher an AI tool by Bunzz

## Workflow
1. **User Exploration**: Discover and play around with featured stems on the platform.
2. **Stem Upload**: Contribute and introduce unique stems.
3. **Tokenization**: Transform the shared stems and curated songs into distinct NFTs on the Celo blockchain.

## Future Directions
- **Automated Stream Platform**: Enabling direct song streams with instant royalty disbursements.
- **Reusable Stems**: Visualize stems as reusable assets across a myriad of songs, enhancing their value and applicability.
- **AI Stem Curation**: AI-powered stem categorization, sorting, and recommendation for a personalized user experience.
- **Song Recognition**: Advanced technologies capable of pinpointing songs, stems, or specific song components.
- Evolve storage options for audio components (e.g., AWS S3, IPFS).
- Incorporate user authentication and governance.
- Tighten integration with Celo for enhanced NFT operations.
- Prioritize rigorous testing, especially for smart contracts, ensuring airtight security and accurate royalty allocation.
