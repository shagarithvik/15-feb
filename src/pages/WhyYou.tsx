import React from 'react';
import { Star } from 'lucide-react';

export default function WhyYou() {
  const reasons = [
    {
      title: "Your Smile",
      description: "The way your smile brightens up even the darkest days",
    },
    {
      title: "Your Heart",
      description: "Your kindness and compassion know no bounds",
    },
    {
      title: "Your Spirit",
      description: "Your adventurous spirit that makes life exciting",
    },
    {
      title: "Your Support",
      description: "How you believe in me, even when I doubt myself",
    },
    {
      title: "Your Love",
      description: "The way you love, unconditionally and completely",
    },
    {
      title: "Your Presence",
      description: "Just being with you makes everything better",
    },
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-rose-700 mb-4">Why You?</h1>
        <p className="text-lg text-rose-600">All the reasons why you're the one</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {reasons.map((reason, index) => (
          <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg transform hover:-translate-y-1 transition-transform">
            <div className="flex items-start gap-4">
              <div className="bg-rose-100 rounded-full p-3">
                <Star className="w-6 h-6 text-rose-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-rose-600 mb-2">{reason.title}</h3>
                <p className="text-gray-700">{reason.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}