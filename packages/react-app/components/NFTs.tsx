import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Skeleton from 'react-loading-skeleton'
import CopyrightNotice from './CopyrightNotice'
import { useAccount, usePrepareContractWrite, useContractRead } from 'wagmi'
// import abi from '../abi/yoshka.json';
import { abi } from '../abi/yoshka';


type CardProps = {
    imageUrl: string;
    title: string;
    creator: string;
    bid: number;
  };

function Card({ imageUrl, title, creator, bid }: CardProps) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [openNotice, setOpenNotice] = useState(false);

    return (
        <section>
        <div className="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] bg-gray-900/90 bg-clip-border shadow-lg w-full !p-3 3xl:p-![18px] undefined">
          <div className="h-full w-full">
            <div className="relative w-full aspect-square">
              {!imageLoaded && <Skeleton className="absolute inset-0 rounded-xl" />}
              <Image
                src={imageUrl}
                alt={title}
                layout="fill"
                quality={100}
                onLoad={() => setImageLoaded(true)}
                className="mb-3 h-full w-full rounded-xl object-cover"
              />
            </div>
            <div className="mb-3 flex items-center px-1 md:items-start">
              <div className="mb-2 flex flex-col items-start">
                <div className="text-lg font-bold text-white">{title}</div>
                <div className="mt-1 text-sm font-medium text-gray-400 md:mt-2">By {creator}</div>
              </div>
            </div>
            <div className="flex items-center justify-between md:items-center lg:justify-between ">
              <div className="flex">
                <p className="!mb-0 text-sm font-bold text-gray-400">Current Bid: {bid} <span>ETH</span></p>
              </div>
              <button
               onClick={() => setOpenNotice(true)}
               type='button' 
               className="linear rounded-xl bg-teal-500 bg-opacity-90 px-3 py-1 text-white font-bold text-base transition duration-200 hover:bg-teal-600/90 active:bg-indigo-500/95"
               >
                Play
              </button>
            </div>
          </div>
        </div>
        <CopyrightNotice open={openNotice} setOpen={setOpenNotice} />
      </section>
    )
}

type NFTs = {
    imageUrl: string;
    title: string;
    creator: string;
    bid: number;
  };

type MusicType = "ASSET" | "SONG";

type NFTMetadata = {
    musicType: MusicType;
    title: string;
    description: string;
    fileType: string;
    duration: string;
    thumbnailURI: string;
    fileURI: string;
    dateOfCreation: number;
    initialPrice: number;
    royaltyPercentage: number;
    ingredients: number[];
};

function NFTs() {
   const demo = [
        {
            imageUrl: "/assets/img/kante.jpg",
            title: "KANTE",
            creator: "You",
            bid: 0.91 
        },
        {
          imageUrl: "https://cdn.openart.ai/uploads/image_1671571298707_1024.jpg",
          title: "Melting",
          creator: "You",
          bid: 0.91 
        },
        {
            imageUrl: "https://cdn.openart.ai/uploads/image_1683986035917_1024.jpg",
            title: "Weeping Stars of My Childhood",
            creator: "You",
            bid: 0.91 
        },
        {
            imageUrl: "https://cdn.openart.ai/uploads/image_1668190365934_1024.jpg",
            title: "Poly Dreams",
            creator: "You",
            bid: 0.91 
        },       
      ];
    const [nfts, setNfts] = useState<NFTs[]>(demo);

    const { address, isConnected } = useAccount();

    const { data: ownedTokenIds } = useContractRead({
        address: "0xCc867437831bF788E6711694ae66fcCb82F18d3a",
        abi: abi,
        functionName: 'ownedNFTs',
        args: [address],
        watch: true
    })

    useEffect(() => {
        console.log("owned tokens - " + ownedTokenIds)
        // if (ownedTokenIds) {
        //     const fetchNFTMetadata = async () => {
        //         let fetchedNFTs = [];
        //         for (let tokenId of ownedTokenIds) {
        //             const { data: nftMetadata } = await useContractRead({
        //                 address: "0xCc867437831bF788E6711694ae66fcCb82F18d3a",
        //                 abi: abi,
        //                 functionName: 'getMusicItemMetadata',
        //                 args: [tokenId]
        //             });
        //             if (nftMetadata) {
        //                 fetchedNFTs.push({
        //                     imageUrl: nftMetadata.thumbnailURI,
        //                     title: nftMetadata.title,
        //                     creator: "You", // You might want to update this based on your needs
        //                     bid: nftMetadata.initialPrice // Assuming 'bid' is the initial price
        //                 });
        //             }
        //         }
        //         setNfts([...demo, ...fetchedNFTs]);
        //     };
        //     fetchNFTMetadata();
        // }
    }, [ownedTokenIds]);


  return (
    <div className="px-7 py-4">
        <div className="flex text-lg sm:text-xl md:text-2xl font-bold text-gray-300">
            <span className='py-2'>Your NFTs...</span>
        </div>
    
    <div className="py-2 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {nfts.map((nft, index) => (
          <Card key={index} imageUrl={nft.imageUrl} title={nft.title} creator={nft.creator} bid={nft.bid} />
        ))}
    </div>
    </div>
  )
}

export default NFTs