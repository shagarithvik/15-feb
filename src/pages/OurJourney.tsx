import React from 'react';
import { MapPin, Heart } from 'lucide-react';

export default function OurJourney() {
  const milestones = [
    {
      date: "15-feb-2023",
      description: "The day we first talked to each other , holds a very special place in my heart",
    },
    {
      date: "03-Mar-2023",
      description: "The first chocolate I have you (you didn't know but had to go through a lot for that one)..",
    },
    {
      date: "06-Mar-2023",
      description: "it still feels like yesterday, that night of chill , that excitement ,, it was the best day of my life...",
    },
    {
      date: "22-Mar-2023",
      description: "The day... it was vereyy levell amma ... waiting for days like that...",
    },
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-rose-700 mb-4">Our Journey</h1>
        <p className="text-lg text-rose-600">Every step we take together is a treasure</p>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-rose-200"></div>
        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <div key={index} className={`relative flex items-center gap-8 ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}>
              <div className="w-1/2 flex justify-end">
                <div className={`bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg ${
                  index % 2 === 0 ? 'mr-8' : 'ml-8'
                }`}>
                  <h3 className="text-xl font-semibold text-rose-600 mb-2">{milestone.date}</h3>
                  <p className="text-gray-700">{milestone.description}</p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 bg-rose-100 rounded-full border-4 border-white">
                <Heart className="w-6 h-6 text-rose-500" />
              </div>
              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}