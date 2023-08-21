import React, { useState, useEffect } from 'react'
import { Blurhash } from 'react-blurhash'

function Logo( {src}: {src: string} ) {
    const [imageLoaded, setImageLoaded] = useState(false)

    useEffect(() => {
        const img = new Image()
        img.onload = () => {
            setImageLoaded(true)
        }
        img.src = src
    }, [src])

    return (
    <>
        {!imageLoaded && (
            <Blurhash
                hash=''
                width='100%'
                height='100%'
                resolutionX={32}
                resolutionY={32}
                punch={1} />
        )}
        {imageLoaded && (<img
            src={src}
            alt=""
        />)}
    </>
  )
}

export default Logo