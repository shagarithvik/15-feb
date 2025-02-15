import React from 'react';

export default function Gallery() {
  const memories = [
    {
      image: "src/pages/sample-image.png"
    },
    {
      image: "src/pages/sunset-walks.png"
    },
    {
      image: "src/pages/coffee-mornings.png"
    },
    {
      image: "src/pages/beach-days.png"
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
              alt="Gallery Image"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
