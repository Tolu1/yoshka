import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from "./Logo"
import axios from "axios";

function Publish({ open, setOpen }: {open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>>}) {
    const pinata_api_key = process.env.NEXT_PUBLIC_PINATA_API_KEY;
    const pinata_secret_api_key = process.env.NEXT_PUBLIC_PINATA_API_SECRET;
    const [name, setName] = useState('');
    const [audioFile, setAudioFile] = useState<File | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [status, setStatus] = useState('');

    const handleAddAsset = async () => {
        setError(null);

        if (!name) {
            setError('Please enter an asset name.');
            return;
        }

        if (!audioFile) {
            setError('Please upload both an art file and an audio file.');
            return;
        }

        const formData = new FormData();
        formData.append('file', audioFile); //song

        try {
            const response = await axios.post(
                'https://api.pinata.cloud/pinning/pinFileToIPFS',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'pinata_api_key': pinata_api_key,
                        'pinata_secret_api_key': pinata_secret_api_key,
                    },
                }
            );

            const ipfsHash = response.data.IpfsHash;
            console.log('IPFS Hash:', ipfsHash);

            // Logic to handle adding asset with the IPFS hash
            setOpen(false);
        } catch (error) {
            console.error('Error uploading to Pinata:', error);
            setError('An error occurred while uploading to Pinata.');
        }
    };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex flex-shrink-0 items-center justify-center rounded-md bg-indigo-100 bg-opacity-90 sm:mx-0 sm:h-10 sm:w-10">
                    <Logo className="h-12 w-12" />
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                      Publish a new song
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                      Ready to share your music with the world? Let&apos;s make some waves!🎵
                      </p>
                    </div>
                    <div className="py-4 bg-white">
                      <div className="mx-auto max-w-7xl">
                          <div className="max-w-xl mx-auto">
                              <div>
                                  <label htmlFor="" className="block text-sm font-medium text-gray-600"> Song title </label>
                                  <div className="relative mt-2">
                                      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                          <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
                                          </svg>

                                      </div>

                                      <input
                                          type="text" name="" id="" placeholder="" value={name}
                                          onChange={(e) => setName(e.target.value)}
                                          className="border block w-full py-3 pl-12 pr-4 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                                      />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="py-4 bg-white">
                    <div className="mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div className="max-w-xl mx-auto">
                            <div className="sm:flex sm:items-center sm:space-x-8">
                                <label htmlFor="" className="block text-sm font-medium text-gray-600"> Song art </label>
                                <div className="relative mt-2 sm:mt-0 sm:flex-1">
                                    <input type="file"
                                           onChange={(e) => setAudioFile(e.target.files ? e.target.files[0] : null)}
                                           className="block w-full px-4 border py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                  </div>
                </div>
                  {error && (
                      <div className="mt-2 text-red-600 text-sm">{error}</div>
                  )}
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-teal-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 sm:ml-3 sm:w-auto"
                        onClick={handleAddAsset}
                    >
                    Publish
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Publish