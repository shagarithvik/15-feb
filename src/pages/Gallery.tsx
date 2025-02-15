import React from 'react';
import { Camera } from 'lucide-react';

export default function Gallery() {
  const memories = [
    {
      image: "https://drive.google.com/file/d/1PUXHHM-oPgaTTJzkBzYLgqYiB7qY6llc/view?usp=sharing",
      caption: "Our First Date"
    },
    {
      image: "https://images.unsplash.com/photo-1621112904887-419379ce6824?w=800&auto=format&fit=crop&q=60",
      caption: "Sunset Walks"
    },
    {
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&auto=format&fit=crop&q=60",
      caption: "Coffee Mornings"
    },
    {
      image: "https://images.unsplash.com/photo-1508789454646-bef72439f197?w=800&auto=format&fit=crop&q=60",
      caption: "Beach Days"
    },
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-rose-700 mb-4">Our Gallery</h1>
        <p className="text-lg text-rose-600">Capturing our precious moments together</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {memories.map((memory, index) => (
          <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg">
            <img
              src={memory.image}
              alt={memory.caption}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center text-white">
                <Camera className="w-8 h-8 mx-auto mb-2" />
                <p className="text-lg font-medium">{memory.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
