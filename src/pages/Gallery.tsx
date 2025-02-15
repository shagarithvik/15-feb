import React from 'react';

export default function Gallery() {
  const memories = [
    { image: "https://raw.githubusercontent.com/shagarithvik/15-feb/main/images/Snapchat-1500213584.jpg" },
    { image: "https://raw.githubusercontent.com/shagarithvik/15-feb/main/images/Snapchat-1609302713.jpg" },
    { image: "https://raw.githubusercontent.com/shagarithvik/15-feb/main/images/Snapchat-1685733709.jpg" },
    { image: "https://raw.githubusercontent.com/shagarithvik/15-feb/main/images/Snapchat-903759383.jpg" },
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-rose-700 mb-4">Our Gallery</h1>
        <p className="text-lg text-rose-600">Capturing our precious moments together</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {memories.map((memory, index) => (
          <div key={index} className="overflow-hidden rounded-xl shadow-lg bg-white p-2">
            <img
              src={memory.image}
              alt={`Memory ${index + 1}`}
              className="w-full h-auto max-h-[400px] object-contain rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
