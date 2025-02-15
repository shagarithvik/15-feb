import React, { useState } from 'react';
import { Music, Heart, Play, Pause } from 'lucide-react';

export default function MyPlaylist() {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const songs = [
    { title: "Perfect", artist: "Ed Sheeran", src: "/music/perfect.mp3", description: "This song reminds me of our perfect moments together" },
    { title: "All of Me", artist: "John Legend", src: "/music/all_of_me.mp3", description: "Because you're all I need in this world" },
    { title: "Can't Help Falling in Love", artist: "Elvis Presley", src: "/music/cant_help_falling_in_love.mp3", description: "The classic that describes how I feel about you" },
    { title: "A Thousand Years", artist: "Christina Perri", src: "/music/a_thousand_years.mp3", description: "I'll love you for a thousand years, and a thousand more" },
  ];

  const handlePlayPause = (song) => {
    if (currentSong === song.src) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentSong(song.src);
      setIsPlaying(true);
    }
  };

  return (
    <div className="min-h-screen bg-rose-50 p-8 flex flex-col items-center">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-rose-700 mb-4">Our Playlist</h1>
        <p className="text-lg text-rose-600">Songs that tell our story</p>
      </div>

      <div className="grid gap-6 max-w-4xl w-full">
        {songs.map((song, index) => (
          <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-rose-200">
            <div className="flex items-start gap-4">
              <button onClick={() => handlePlayPause(song)} className="bg-rose-100 rounded-full p-3">
                {currentSong === song.src && isPlaying ? <Pause className="w-6 h-6 text-rose-500" /> : <Play className="w-6 h-6 text-rose-500" />}
              </button>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-rose-600">{song.title}</h3>
                <p className="text-gray-600 mb-2">{song.artist}</p>
                <p className="text-gray-700">{song.description}</p>
              </div>
              <button className="text-rose-500 hover:text-rose-600 transition-colors">
                <Heart className="w-6 h-6" />
              </button>
            </div>
            {currentSong === song.src && (
              <audio autoPlay={isPlaying} controls className="w-full mt-4">
                <source src={song.src} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
