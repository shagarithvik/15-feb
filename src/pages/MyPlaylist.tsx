import React from 'react';
import { Music, Heart } from 'lucide-react';

export default function MyPlaylist() {
  const songs = [
    {
      title: "Perfect",
      artist: "Ed Sheeran",
      description: "This song reminds me of our perfect moments together",
    },
    {
      title: "All of Me",
      artist: "John Legend",
      description: "Because you're all I need in this world",
    },
    {
      title: "Can't Help Falling in Love",
      artist: "Elvis Presley",
      description: "The classic that describes how I feel about you",
    },
    {
      title: "A Thousand Years",
      artist: "Christina Perri",
      description: "I'll love you for a thousand years, and a thousand more",
    },
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-rose-700 mb-4">Our Playlist</h1>
        <p className="text-lg text-rose-600">Songs that tell our story</p>
      </div>

      <div className="grid gap-6">
        {songs.map((song, index) => (
          <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-rose-100 rounded-full p-3">
                <Music className="w-6 h-6 text-rose-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-rose-600">{song.title}</h3>
                <p className="text-gray-600 mb-2">{song.artist}</p>
                <p className="text-gray-700">{song.description}</p>
              </div>
              <button className="text-rose-500 hover:text-rose-600 transition-colors">
                <Heart className="w-6 h-6" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}