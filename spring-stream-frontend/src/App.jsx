import { useState } from 'react'
import './App.css'
import VideoUpload from './components/VideoUpload';
import { Toaster } from 'react-hot-toast';
import { use } from 'react';

function App() {
  const [count, setcount] = useState(0);
  const [videoId, setVideoId] = useState('5c8923d2-48f1-4a30-be0f-112792caefbb');

  return (

    <>
      <Toaster />
      <div className="flex flex-col items-center space-y-6 justify-center py-12 px-6">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-gray-700 to-gray-400 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
          Video Streaming App
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md text-center">
          Stream your favorite content in high quality, anytime, anywhere.
        </p>

        <div className='flex mt-14 w-full justify-around'>
          <div>
            <h1 className='text-white'>Playing Video</h1>
            <video style={{
              width: 500,
              height: 500
            }}
              src={`http://localhost:8080/api/v1/videos/stream/range/${videoId}`} controls></video>
          </div>
          <VideoUpload />
        </div>
      </div>

      <footer className="w-full mt-12 border-t border-gray-300 dark:border-gray-700 py-6 text-center">
    <p className="text-gray-600 dark:text-gray-300 text-sm">
      © {new Date().getFullYear()} Video Streaming App. All rights reserved.
    </p>
    <div className="flex space-x-4 mt-3 justify-center">
      <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
        Privacy Policy
      </a>
      <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
        Terms of Service
      </a>
      <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
        Contact Us
      </a>
    </div>
  </footer>

    </>
  );
}

export default App
