import React, { useState } from 'react'
import Image from 'next/image'
import Skeleton from 'react-loading-skeleton'

function Card() {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
    <section>
            <div className="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px] bg-white undefined">
                <div className="h-full w-full">
                    <div className="relative w-full h-[205px]">
                        {!imageLoaded && <Skeleton className="absolute inset-0 rounded-xl" />}
                        <Image
                            src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png"
                            alt=""
                            layout="fill"  
                            quality={100}
                            onLoad={() => setImageLoaded(true)}
                            className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full object-fit" 
                         />
                        <button className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 text-brand-500 hover:cursor-pointer">
                            <div className="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50">
                                <svg className="text-purple-300 " stroke="#44ffff" fill="#444444" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"></path></svg>
                            </div>
                        </button>
                    </div>
                    <div className="mb-3 flex items-center justify-between px-1 md:items-start">
                        <div className="mb-2">
                            <p className="text-lg font-bold text-navy-700"> KANTE </p>
                            <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">By You </p>
                        </div>
                        <div className="flex flex-row-reverse md:mt-2 lg:mt-0">
                            <span className="z-0 ml-px inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#E0E5F2] text-xs text-navy-700 ">+5</span><span className="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white">
                                <img className="h-full w-full rounded-full object-cover" src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar1.eeef2af6dfcd3ff23cb8.png" alt="" />
                            </span>
                            <span className="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white">
                                <img className="h-full w-full rounded-full object-cover" src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar2.5692c39db4f8c0ea999e.png" alt="" />
                            </span>
                            <span className="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white">
                                <img className="h-full w-full rounded-full object-cover" src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar3.9f646ac5920fa40adf00.png" alt="" />
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between md:items-center lg:justify-between ">
                        <div className="flex">
                            <p className="!mb-0 text-sm font-bold text-brand-500">Current Bid: 0.91 <span>ETH</span></p>
                        </div>
                        <button type='button' className="linear rounded-2xl bg-purple-300 px-3 py-1 text-white font-bold text-base transition duration-200 hover:bg-purple-400/90 active:bg-indigo-500/95">View</button>
                    </div>
                </div>
            </div>
    </section>
    )
}

function NFTs() {
  return (
    <div className="px-7 py-4">
        <div className="flex text-lg sm:text-xl md:text-2xl font-bold text-gray-300">
            <span className='py-2'>Your NFTs...</span>
        </div>
    
    <div className="py-2 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card />
        <Card />
        <Card />
        <Card />
        {/* <div className="flex flex-col justify-center items-center h-[100vh]">
            <div className="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px] bg-white undefined">
                <div className="h-full w-full">
                    <div className="relative w-full">
                        <img src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png" className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full" alt="" />
                        <button className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 text-brand-500 hover:cursor-pointer">
                            <div className="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"></path></svg>
                            </div>
                        </button>
                    </div>
                    <div className="mb-3 flex items-center justify-between px-1 md:items-start">
                        <div className="mb-2">
                            <p className="text-lg font-bold text-navy-700"> Abstract Colors </p>
                            <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">By Esthera Jackson </p>
                        </div>
                        <div className="flex flex-row-reverse md:mt-2 lg:mt-0">
                            <span className="z-0 ml-px inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#E0E5F2] text-xs text-navy-700 ">+5</span><span className="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white">
                                <img className="h-full w-full rounded-full object-cover" src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar1.eeef2af6dfcd3ff23cb8.png" alt="" />
                            </span>
                            <span className="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white">
                                <img className="h-full w-full rounded-full object-cover" src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar2.5692c39db4f8c0ea999e.png" alt="" />
                            </span>
                            <span className="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white">
                                <img className="h-full w-full rounded-full object-cover" src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar3.9f646ac5920fa40adf00.png" alt="" />
                            </span>
                        </div>
                    </div>
                    <div className="flex bg-red-400 items-center justify-between md:items-center lg:justify-between ">
                        <div className="flex">
                            <p className="!mb-0 text-sm font-bold text-brand-500">Currentff Bid: 0.91 <span>ETH</span></p>
                        </div>
                        <button type='button' className="linear rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium transition duration-200 hover:bg-brand-800 active:bg-brand-700">Place Bid</button>
                    </div>
                </div>
            </div>
            <p className="font-normal text-navy-700 mt-20 mx-auto w-max">Notifications Card component from <a href="https://horizon-ui.com?ref=tailwindcomponents.com" target="_blank" className="text-brand-500 font-bold">Horizon UI Tailwind React</a></p>  
        </div> */}
    </div>
    </div>
  )
}

export default NFTs