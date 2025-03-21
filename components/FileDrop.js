// import { useDropzone } from 'react-dropzone';
import { useState, useCallback } from 'react';
import { FileText, Upload, AlertCircle } from 'lucide-react';

export default function FileDropZone({ onFilesUploaded }) {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const readFile = async (file) => {
    try {
      const content = await file.text();
      setFile({
        name: file.name,
        type: file.type,
        content
      });
      setError(null);
      onFilesUploaded(content);
    } catch (err) {
      setError('Error reading file. Please try again.');
      setFile(null);
    }
  };

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];
    if (!droppedFile) {
      setError('No file detected. Please try again.');
      return;
    }

    if (!['text/plain', 'text/html'].includes(droppedFile.type)) {
      setError('Please drop a text or HTML file.');
      return;
    }

    readFile(droppedFile);
  }, [readFile]);


  return (
    <div>
      <div className=' p-2 shadow-md rounded-2xl'>
      <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`
            border-2 border-dashed rounded-lg p-8 transition-all
            ${isDragging 
              ? 'border-blue-500 bg-blue-50' 
              : 'border-lime-500 hover:border-gray-400'
            }
          `}
        >
          <div className="flex flex-col items-center justify-center text-center">
            <Upload className={`w-12 h-12 mb-4 ${isDragging ? 'text-blue-500' : 'text-lime-400'}`} />
            <p className="text-lg mb-2 font-medium text-gray-700">
              Drag and drop your file here
            </p>
            <p className="text-sm text-gray-500">
              Supported file types: .txt, .html
            </p>
          </div>
        </div>
        {file && (
          // <p>{file.content}</p>
          <h3>{file.name}</h3>
        )}
       <h1 className=' text-sm p-1 flex justify-center text-slate-500'>Some files such that image, videos, audios. may not be recognized. <span className=' px-1 text-lime-500 cursor-pointer '>Learn more.</span> </h1>
       <div className=' flex items-center w-full justify-between mt-4 '>
       <span className=' mx-2 flex flex-row gap-1'>
       <img width="24" height="24" src="https://img.icons8.com/material-two-tone/24/help.png" alt="help"/>
        Support</span>
      <div>
      <button className=' border-2 border-slate-400 px-4 cursor-pointer py-2 rounded-lg mx-2'>Discard</button>
      <button className=' bg-lime-500 text-white px-4 cursor-pointer hover:bg-lime-600 transition-all py-2 rounded-lg mx-2'>Import</button>

      </div>
      
       </div>
      </div>
      </div>
  );
}
