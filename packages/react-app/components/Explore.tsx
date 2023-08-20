import React, { useEffect, useState } from 'react'
import { PlayIcon, PauseIcon, DocumentPlusIcon } from '@heroicons/react/20/solid'
import ReactHowler from 'react-howler'
import Publish from './Publish'
import AddAsset from './AddAsset'

const musicAssets = [
  {
    name: 'Female Voice',
    title: 'Female Voice acapella',
    role: 'Free',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    uri: '/assets/Alternative/female-vocal-acapella-lovin-you_128bpm_C_minor.wav'
  },
  {
    name: 'Ghostly Vox',
    title: 'Ghostly Vox 100 bpm',
    role: 'Free',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    uri: '/assets/Hip-hop/ghostly-vox_100bpm_A_minor.wav'
  },
  {
    name: 'Choir vowels',
    title: 'Choir Vowels chord progression',
    role: 'Free',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    uri: '/assets/Alternative/choir-vowels-chord-progression_120bpm_A#_major.wav'
  },
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    role: 'Free',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    uri: '/assets/Alternative/female-vocal-acapella-lovin-you_128bpm_C_minor.wav'
  },
  // More people...
]

interface Asset {
  name: string;
  title: string;
  email: string;
  role: string;
  telephone: string;
  imageUrl: string;
  uri: string;
}

function Asset({name, title, email, role, telephone, imageUrl, uri}: Asset) {
  const [ playing, setPlaying ] = useState(false)
  const [ volume, setVolume ] = useState(false)
  const [ loading, setLoading ] = useState(false)
  const [ loadingError, setLoadingError ] = useState(false)
  const [ audioEnded, setAudioEnded ] = useState(true)
  const [ playError, setPlayError ] = useState(false)

  const handlePlay = () => {
    // It seems like React Howler manipulate the state variable playing to be false when audio has finished playing even before we update the state
    setPlaying(prevPlaying => !prevPlaying)
  }

  const handleVolume = () => {

  }

  const handleLoading = () => {

  }

  const handleLoadingError = () => {

  }

  const handlePlayError = () => {

  }

  const handleEnded = () => {
    setAudioEnded(true)
    // It seems like React Howler manipulate the state variable playing to be false when audio has finished playing even before we update the state
    setPlaying(false)
  }

  useEffect(() => {
    playing ? setAudioEnded(false) : setAudioEnded(true)
  }, [playing])

  return (
  <li className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white bg-clip-border shadow shadow-shadow-500">
    <div className="flex w-full items-center justify-between space-x-6 p-6">
      <div className="flex-1 truncate">
        <div className="flex items-center space-x-3">
          <h3 className="truncate text-sm font-medium text-gray-900">{name}</h3>
          <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
            {role}
          </span>
        </div>
        <p className="mt-1 truncate text-sm text-gray-500">{title}</p>
      </div>
      <img className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300" src={imageUrl} alt="" />
    </div>
    <div>
      <div className="relative -mt-px flex divide-x divide-gray-200">
        <div className="flex w-0 flex-1">
          <button
            type='button'
            onClick={handlePlay}
            className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
          >
            {playing ? 
            <PauseIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            :
            <PlayIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            }
            {playing ? 'Pause' : 'Play'}
          </button>
        </div>
        <div className="-ml-px flex w-0 flex-1">
          <button
            type='button'
            onClick={() => {}}
            className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
          >
            <DocumentPlusIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            Use
          </button>
        </div>
        <div className="h-1 bg-gray-300 absolute left-0 w-full">
          <div style={{width: '30%'}} className="-ml-[0.8px] h-1 bg-gray-500 transition-all duration-500"></div>
        </div>
      </div>
    </div>
      <div className='hidden'><ReactHowler 
      src={uri}
      playing={playing}
      onVolume={handleVolume}
      onLoad={handleLoading}
      onLoadError={handleLoadingError}
      onEnd={handleEnded}
      onPlayError={handlePlayError}
    /></div>
  </li>
  )

}

function Explore() {
  const [publish, setPublish] = useState(false)
  const [addAsset, setAddAsset] = useState(false)

  return (
    <div className="relative px-7 py-4 flex flex-col h-full">
        <div className="flex text-lg sm:text-xl md:text-2xl font-bold text-gray-300">
          <span className='py-2'>Explore audio samples and stems...</span>
        </div>
        <div className="flex space-x-6 py-2">
        <button 
            onClick={() => {setAddAsset(true)}}
            className="bg-teal-500 hover:bg-teal-600/90 text-white font-bold py-2 px-4 rounded shadow-sm transition duration-200 ease-in-out">
            Add Asset
        </button>
        <button 
          onClick={() => {setPublish(true)}}
          className="bg-purple-400 hover:bg-purple-500/90 text-white font-bold py-2 px-4 rounded shadow-sm transition duration-200 ease-in-out">
          Publish Song
      </button>
      </div>
        <ul role="list" className="py-2 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {musicAssets.map((asset) => (
            <Asset key={asset.email} {...asset} />
          ))}
        </ul>
      <Publish open={publish} setOpen={setPublish} />
      <AddAsset open={addAsset} setOpen={setAddAsset} />
    </div>
  )
}

export default Explore
