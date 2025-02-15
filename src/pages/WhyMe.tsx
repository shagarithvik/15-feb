import React from 'react';
import { Heart } from 'lucide-react';

export default function WhyMe() {
  const qualities = [
    "I'll always be there for you........",
    "Because , you are the one for me",
    "I promise to make you smile, even on the cloudiest days",
    "I promise to never make you cry",
    "I can be hard to understand but remember , I only love you",
    "I wanna accompany you on all of your adventures....",
    "I will wait only for you....",
    "Its just you or no-one for me ...",
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-rose-700 mb-4">Why Me?</h1>
        <p className="text-lg text-rose-600">Let me share what makes me special for you</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {qualities.map((quality, index) => (
          <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg transform hover:-translate-y-1 transition-transform">
            <div className="flex items-start gap-4">
              <div className="bg-rose-100 rounded-full p-3">
                <Heart className="w-6 h-6 text-rose-500" />
              </div>
              <p className="text-lg text-gray-700">{quality}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
