import React from 'react';
import { Heart, ChevronRight } from 'lucide-react';

interface LandingPageProps {
  onStart: () => void;
}

export default function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center space-y-6">
      <Heart className="w-12 h-12 text-rose-500 animate-pulse" />
      <h1 className="text-3xl font-semibold text-rose-700">My Dearest Love</h1>
      <p className="max-w-md text-lg text-gray-700">
        From the moment I first saw you, I knew you were special. Your smile lights
        up my world in ways I never thought possible.
      </p>
      <p className="max-w-md text-lg text-gray-700">
        Every moment spent with you feels like a beautiful dream, and I want to
        make many more memories together.
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