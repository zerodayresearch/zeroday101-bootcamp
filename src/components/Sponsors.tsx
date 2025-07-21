import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Shield } from 'lucide-react';

const Sponsors: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const sponsors = [
    {
      id: 1,
      name: "Jayakarta Military Command",
      logo: "/Danpomdam JayaJayakarta.png",
      description: "Strategic Defense Partner"
    },
    {
      id: 2,
      name: "Russian Foreign Intelligence",
      logo: "/2.png",
      description: "International Intelligence Cooperation"
    },
    {
      id: 3,
      name: "Federal Security Service",
      logo: "/3.png",
      description: "Cybersecurity Excellence Partner"
    },
    {
      id: 4,
      name: "Russian Military Intelligence",
      logo: "/4.png",
      description: "Advanced Threat Research"
    },
    {
      id: 5,
      name: "Special Operations Division",
      logo: "/5.png",
      description: "Elite Training Partnership"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sponsors.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, sponsors.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sponsors.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sponsors.length) % sponsors.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-6">
            <Shield className="h-4 w-4 text-red-400" />
            <span className="text-red-400 text-sm font-medium">Strategic Partners</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            <span className="text-red-400">Zeroday101 Bootcamp</span>
            <br />
            <span className="text-white">Sponsors</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Didukung oleh organisasi-organisasi strategis yang berkomitmen pada pengembangan cybersecurity profesional
          </p>
        </div>

        {/* Main Carousel */}
        <div 
          className="relative bg-gradient-to-r from-red-500/5 to-orange-500/5 border border-red-500/20 rounded-2xl p-8 mb-8"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="flex items-center justify-center min-h-[300px]">
            <div className="text-center max-w-md mx-auto">
              <div className="mb-6 flex justify-center">
                <div className="w-48 h-48 rounded-2xl shadow-2xl flex items-center justify-center p-4">
                  <img
                    src={sponsors[currentSlide].logo}
                    alt={sponsors[currentSlide].name}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div 
                    className="hidden w-full h-full rounded-lg items-center justify-center"
                    style={{ display: 'none' }}
                  >
                    <div className="text-center">
                      <Shield className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <div className="text-gray-600 font-bold text-lg">
                        {sponsors[currentSlide].name.split(' ').map(word => word[0]).join('')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">
                {sponsors[currentSlide].name}
              </h3>
              <p className="text-red-400 font-medium">
                {sponsors[currentSlide].description}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-red-500/20 hover:bg-red-500/40 border border-red-500/30 rounded-full p-3 transition-all duration-200 group"
          >
            <ChevronLeft className="h-6 w-6 text-red-400 group-hover:text-white" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-red-500/20 hover:bg-red-500/40 border border-red-500/30 rounded-full p-3 transition-all duration-200 group"
          >
            <ChevronRight className="h-6 w-6 text-red-400 group-hover:text-white" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center space-x-3 mb-8">
          {sponsors.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-red-500 scale-125'
                  : 'bg-gray-600 hover:bg-red-400'
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="bg-gray-700 rounded-full h-1">
            <div
              className="bg-gradient-to-r from-red-500 to-orange-500 h-1 rounded-full transition-all duration-300"
              style={{ width: `${((currentSlide + 1) / sponsors.length) * 100}%` }}
            />
          </div>
          <div className="text-center mt-2">
            <span className="text-gray-400 text-sm">
              {currentSlide + 1} of {sponsors.length}
            </span>
          </div>
        </div>

        {/* All Sponsors Grid (Mobile Friendly) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {sponsors.map((sponsor, index) => (
            <button
              key={sponsor.id}
              onClick={() => goToSlide(index)}
              className={`bg-gray-800 border rounded-lg p-4 transition-all duration-200 hover:border-red-500/50 ${
                index === currentSlide
                  ? 'border-red-500/50 bg-red-500/10'
                  : 'border-gray-700'
              }`}
            >
              <div className="w-16 h-16 rounded-lg mx-auto mb-2 flex items-center justify-center p-2">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div 
                  className="hidden w-full h-full rounded items-center justify-center"
                  style={{ display: 'none' }}
                >
                  <div className="text-gray-600 font-bold text-xs">
                    {sponsor.name.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
              </div>
              <div className="text-white text-xs font-medium text-center truncate">
                {sponsor.name}
              </div>
            </button>
          ))}
        </div>

        {/* Partnership Message */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-lg p-6 max-w-3xl mx-auto">
            <h3 className="text-lg font-bold text-red-400 mb-2">🤝 Strategic Partnerships</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Zeroday101 Bootcamp bangga bermitra dengan organisasi-organisasi strategis yang mendukung 
              pengembangan talenta cybersecurity Indonesia. Kemitraan ini memastikan kurikulum kami 
              selalu relevan dengan kebutuhan industri dan standar internasional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;