import { useState, useRef } from 'react';

export default function MusicUploader() {
  const [file, setFile] = useState<File | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      setFile(files[0]);
      if (audioRef.current) {
        audioRef.current.src = URL.createObjectURL(files[0]);
        audioRef.current.play();
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 via-purple-500 to-red-500">
      <div className="relative">
        <input
          type="file"
          accept="audio/mp3"
          onChange={handleFileChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center animate-pulse">
          <span className="text-2xl text-purple-700">Upload MP3</span>
        </div>
      </div>
      {file && (
        <div className="mt-8">
          <audio ref={audioRef} controls className="hidden" />
          <div className="w-64 h-64 bg-gradient-to-r from-yellow-500 via-sky-500 to-pink-500 rounded-full flex items-center justify-center animate-spin">
            <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center">
              <span className="text-xl text-purple-700">Playing...</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}