'use client'

import Image from "next/image";

import React from "react"

import { useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism"

import { Button } from "../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
// import { Card } from "./components/ui/card"
import FileDropZone from "../components/FileDrop"

  // Sample code for demonstration
  const sampleCode = {
    "app/main.jsx": `import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// This could be improved by using createRoot
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);`,
    "app/layout.jsx": `import React from 'react';

// This layout could use better semantic HTML
export default function Layout({ children }) {
  return (
    <div className="layout">
      <div className="header">Header</div>
      <div className="content">{children}</div>
      <div className="footer">Footer</div>
    </div>
  );
}`,
  }

export default function Home() {

  const [files, setFiles] = useState([])
  const [isDragging, setIsDragging] = useState(false)

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files) {
      setFiles(Array.from(e.dataTransfer.files))
    }
  }

  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleRun(files) {

    console.log("Files upload, running plugin...")
    setLoading(true);

    const formData = new FormData();
    files.forEach((file) => formData.append("files", file));

    const response = await fetch('/api/analyze', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    setSuggestions(data.suggestions);
    setLoading(false);
  }

  return (
    <main className="flex min-h-screen flex-col md:flex-row">
      {/* Left section - Drop area */}
      <div className="w-1/2 p-5 border">
        <h2>Upload Your Code Files</h2>
        <FileDropZone onFilesUploaded={handleRun} />
      </div>

      {/* Right section - Code recommendations */}
      <div className="flex flex-col w-full md:w-1/2 bg-gray-100 p-8">
        <h2 className="text-xl font-semibold mb-6">Recommended Improvements :</h2>

        {/* First file */}
        <p className="text-sm text-gray-600 mb-2">app/main.jsx</p>
        <Card className="mb-6 overflow-hidden">
          <SyntaxHighlighter language="jsx" style={atomDark} customStyle={{ margin: 0, borderRadius: 0 }}>
            {sampleCode["app/main.jsx"]}
          </SyntaxHighlighter>
        </Card>

        {/* Second file */}
        <p className="text-sm text-gray-600 mb-2">app/layout.jsx</p>
        <Card className="mb-6 overflow-hidden">
          <SyntaxHighlighter language="jsx" style={atomDark} customStyle={{ margin: 0, borderRadius: 0 }}>
            {sampleCode["app/layout.jsx"]}
          </SyntaxHighlighter>
        </Card>

        {/* Run button */}
        <Button className="mt-auto w-full bg-gray-800 hover:bg-gray-700 text-white">Run Plugin</Button>
      </div>
    </main>
  );
}
