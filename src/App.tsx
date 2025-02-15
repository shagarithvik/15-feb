import React, { useState } from 'react';
import { Heart, Music, Book, Camera, ChevronRight, Menu, X, Clock, Image, MapPin, User, Users } from 'lucide-react';
import LandingPage from './pages/LandingPage';
import WhyMe from './pages/WhyMe';
import Gallery from './pages/Gallery';
import OurJourney from './pages/OurJourney';
import MyPlaylist from './pages/MyPlaylist';
import WhyYou from './pages/WhyYou';

function App() {
  const [showContent, setShowContent] = useState(false);
  const [currentPage, setCurrentPage] = useState('landing');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigation = [
    { name: 'Why Me?', icon: User, id: 'whyme' },
    { name: 'Gallery', icon: Image, id: 'gallery' },
    { name: 'Our Journey', icon: MapPin, id: 'journey' },
    { name: 'My Playlist', icon: Music, id: 'playlist' },
    { name: 'Why You?', icon: Users, id: 'whyyou' },
  ];

  if (!showContent) {
    return <LandingPage onStart={() => setShowContent(true)} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'whyme':
        return <WhyMe />;
      case 'gallery':
        return <Gallery />;
      case 'journey':
        return <OurJourney />;
      case 'playlist':
        return <MyPlaylist />;
      case 'whyyou':
        return <WhyYou />;
      default:
        return <WhyMe />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-100 to-rose-200">
      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded-full shadow-lg text-rose-500 hover:bg-rose-50 transition-colors"
      >
        {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-40 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-center mb-8">
            <Heart className="w-8 h-8 text-rose-500" />
          </div>
          <nav className="space-y-4">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  currentPage === item.id
                    ? 'bg-rose-50 text-rose-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main
        className={`min-h-screen transition-all duration-300 ${
          isSidebarOpen ? 'pl-64' : 'pl-0'
        }`}
      >
        {renderPage()}
      </main>
    </div>
  );
}

export default App;