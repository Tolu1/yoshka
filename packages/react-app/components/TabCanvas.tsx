import React from 'react'
import MySongs from './MySongs'

function TabCanvas({ children }: {children: React.ReactNode}) {
  return (
    <div className="relative">
        <div className="opacity-0">
            <MySongs />
        </div>
        <div className="absolute inset-0 overflow-hidden overflow-y-auto opacity-100 bg-gray-100 rounded-md text-sm font-medium text-center tracking-tight text-gray-700 text-opacity-80">
          {/* <div className='w-full h-full'> */}
            {children}
          {/* </div> */}
        </div>
    </div>
  )
}

export default TabCanvas