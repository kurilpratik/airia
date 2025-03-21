import { useDropzone } from 'react-dropzone';
import { useState } from 'react';

export default function FileDropZone({ onFilesUploaded }) {
  const [files, setFiles] = useState([]);

  const onDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
    onFilesUploaded(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="border-2 border-dashed p-5 rounded-lg cursor-pointer">
      <input {...getInputProps()} />
      <p>Drag & drop files here or click to select (HTML, CSS, JS)</p>
      <ul>
        {files.map((file) => (
          <li key={file.name}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
}
