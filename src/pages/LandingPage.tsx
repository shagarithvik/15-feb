import React from 'react';
import { Heart, ChevronRight } from 'lucide-react';

interface LandingPageProps {
  onStart: () => void;
}

export default function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center space-y-6">
      <Heart className="w-12 h-12 text-rose-500 animate-pulse" />
      <h1 className="text-3xl font-semibold text-rose-700">Hii Pottiiiiiiiiiiiiiiiiiii...</h1>
      <p className="max-w-md text-lg text-gray-700">
        I still remember all our conversations , talking about life , friends  ,, and US...
      </p>
      <p className="max-w-md text-lg text-gray-700">
        Every moment I've spent with you feels like a beautiful dream, and I want to
        make many more memories together.
      </p>
      <p className="max-w-md text-lg text-gray-700">
        It's been two years since we first talked ...
      </p>
      <p className="max-w-md text-lg text-gray-700">
Do you remember it? ,, all of a sudden , sharanya exchanged with your phone and we started talking..............
      </p>
      <p className="max-w-md text-lg text-gray-700">
I even saw star constellations for the first time when I was talking to you ...
      </p>
      <p className="max-w-md text-lg text-gray-700">
I have a lot more to say but.....      </p>
      <p className="max-w-md text-lg text-gray-700">
      YOU WERE EVERYTHING   
      </p>
      <button
        onClick={onStart}
        className="bg-rose-500 text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-rose-600 transition-colors shadow-lg hover:shadow-xl"
      >
        Begin Our Journey <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
