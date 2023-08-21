import React, { useEffect, useState } from 'react';
import Uppy, { UppyFile } from '@uppy/core';
import { DragDrop } from '@uppy/react';
import '@uppy/core/dist/style.css';
import '@uppy/drag-drop/dist/style.css';
import { type } from 'os';

const AudioUploader = () => {
  const [uppy] = useState(
    new Uppy({
      restrictions: {
        allowedFileTypes: ['audio/*']
      }
    })
  );

  const [files, setFiles] = useState<UppyFile<Record<string, unknown>, Record<string, unknown>>[]>([]);

  useEffect(() => {
    uppy.on('file-added', (file) => {
      setFiles(prevFiles => [...prevFiles, file]);
    });

    return () => {
      uppy.close();
    };
  }, [uppy]);

  return (
    <div>
      <DragDrop uppy={uppy} />
      <ul>
        {files.map(file => (
          <li key={file.id}>
            {file.name}
            <audio controls src={URL.createObjectURL(file.data)}></audio>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AudioUploader;
