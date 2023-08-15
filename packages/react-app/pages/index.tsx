import AudioUploader from "@/components/AudioUploader";
import MySongs from "@/components/MySongs";
import React, { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<string | undefined>('explore');
  
  const handleSwitch: React.MouseEventHandler<HTMLDivElement> | undefined = (e) => {
    setActiveTab(e.currentTarget.id);
    console.log(activeTab)
  }

  return (
    <div>
      <main className="-mt-32">
        <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="min-h-screen bg-white rounded-lg shadow-lg p-8">
        <h1 className=" bg-gray-100 rounded-md px-3 py-2 text-sm font-medium text-center tracking-tight text-gray-700 text-opacity-80">Yoshka</h1>
        <div className="block pb-6 bg-white">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex items-center justify-center">
                    <div className="sm:border-gray-200 sm:border-b">
                        <nav className="flex flex-wrap -mb-px sm:space-x-10">
                            <div id="explore" onClick={handleSwitch} className={`inline-flex items-center w-1/2 text-sm font-medium  transition-all duration-200 cursor-pointer sm:w-auto sm:border-b-2 sm:py-4 group whitespace-nowrap ${activeTab === "explore"? 'text-indigo-600 sm:border-indigo-600 ' : 'text-gray-500 hover:text-gray-900 hover:border-gray-300 sm:border-transparent'}`}>
                                <svg className={`-ml-0.5 mr-2 transition-all duration-100 h-5 w-5 ${activeTab === "explore"? '' : 'text-gray-400 group-hover:text-gray-600' }`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                Explore
                            </div>

                            <div id="my-songs" onClick={handleSwitch} className={`inline-flex items-center w-1/2 text-sm font-medium transition-all duration-200 cursor-pointer sm:w-auto sm:border-b-2 sm:py-4 group whitespace-nowrap ${activeTab === "my-songs"? 'text-indigo-600 sm:border-indigo-600 ' : 'text-gray-500 hover:text-gray-900 hover:border-gray-300 sm:border-transparent'}`}> 
                                <svg className={`-ml-0.5 mr-2 transition-all duration-100 h-5 w-5 ${activeTab === "my-songs"? '' : 'text-gray-400 group-hover:text-gray-600' }`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
                                </svg>
                              
                                My Songs
                            </div>

                            <div id="nfts" onClick={handleSwitch} className={`inline-flex items-center w-1/2 text-sm font-medium  transition-all duration-200 cursor-pointer sm:w-auto sm:border-b-2 sm:py-4 group whitespace-nowrap ${activeTab === "nfts"? 'text-indigo-600 sm:border-indigo-600 ' : 'text-gray-500 hover:text-gray-900 hover:border-gray-300 sm:border-transparent'}`}>
                                <svg className={`-ml-0.5 mr-2 transition-all duration-100 h-5 w-5 ${activeTab === "nfts"? '' : 'text-gray-400 group-hover:text-gray-600' }`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                </svg>
                                NFTs
                            </div>
                        </nav>                        
                    </div>
                </div>
            </div>
        </div>
        {/* Tab Content */}  
        {activeTab === 'explore' && <div className="relative"><div className="opacity-0"><MySongs /></div><div className="absolute inset-0 opacity-100 bg-gray-100 rounded-md px-3 py-2 text-sm font-medium text-center tracking-tight text-gray-700 text-opacity-80">Explore samples and stems</div></div>}
        {activeTab === 'my-songs' && <MySongs />}
        {activeTab === 'nfts' && <div className="relative"><div className="opacity-0"><MySongs /></div><div className="absolute inset-0 opacity-100 bg-gray-100 rounded-md px-3 py-2 text-sm font-medium text-center tracking-tight text-gray-700 text-opacity-80">NFTs Section</div></div>}


          </div>
        </div>
      </main>
    </div>
  )
}
