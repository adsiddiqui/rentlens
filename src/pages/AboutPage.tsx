import React, { useState, useEffect } from 'react';
import { ArrowDown, Building2, Mail, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const progress = Math.min(scrollPosition / (windowHeight * 0.9), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExplore = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const heroOpacity = Math.max(1 - scrollProgress * 1.5, 0);
  const heroScale = 1 + scrollProgress * 0.1;

  return (
    <div className="relative min-h-[200vh] bg-dark-100">
      <section 
        className="sticky top-0 h-screen flex items-center justify-center overflow-hidden transition-transform duration-300"
        style={{ 
          opacity: heroOpacity,
          transform: `scale(${heroScale})`,
          visibility: heroOpacity === 0 ? 'hidden' : 'visible'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent-600/60 via-accent-500/50 to-dark-100/80" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-uJBkaPZISIU?auto=format&fit=crop&q=80)',
            opacity: 0.9,
            mixBlendMode: 'normal'
          }}
        />
        <div className="relative text-center space-y-6 max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-accent-400 to-accent-600 p-3 rounded-xl shadow-lg animate-float">
              <Building2 className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">RentLens</h1>
          </div>
          <p className="text-xl text-white mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] font-medium">
            Rent smarter. See the true cost of space.
          </p>
          <button 
            onClick={handleExplore}
            className="bg-gradient-to-r from-accent-400 to-accent-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 mx-auto hover:from-accent-500 hover:to-accent-600 transition-all shadow-lg"
          >
            <ArrowDown className="h-5 w-5" />
            Details
          </button>
        </div>
      </section>

      <section className="relative min-h-screen bg-dark-100 pt-32">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <div className="space-y-12">
            <div className="prose prose-invert">
              <p className="text-lg leading-relaxed text-gray-300 mb-8">
                I created RentLens because I struggled to find reliable rent prices in different neighborhoods. RentLens is a user-friendly tool that shows rent per square foot for various listings on an interactive map.
              </p>
              <p className="text-lg leading-relaxed text-gray-300 mb-8">
                You can easily filter results in real-time, view heat maps to see price trends, adjust range sliders to fit your budget, and save your favorite listings for easy comparisons.
              </p>
              <p className="text-lg leading-relaxed text-gray-300 mb-12">
                Currently available for the San Francisco Bay Area, with more cities coming soon. It made house hunting much simpler and transparent for me, and I hope it helps others too!
              </p>
            </div>
            <div className="flex justify-center mb-16">
              <Link
                to="/"
                className="bg-gradient-to-r from-accent-400 to-accent-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:from-accent-500 hover:to-accent-600 transition-all shadow-lg"
              >
                <Building2 className="h-5 w-5" />
                Explore Listings
              </Link>
            </div>

            <div className="text-center space-y-6">
              <div className="inline-block relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-400/10 via-accent-500/10 to-accent-400/10 backdrop-blur-[2px] rounded-full transform scale-110"></div>
                <h2 className="relative text-2xl font-semibold text-accent-400 px-8 py-3">Contact</h2>
              </div>
              <p className="text-lg text-gray-300">
                This is a work in progress, I'd love some feedback. Reach out to me!
              </p>
              <div className="flex items-center justify-center gap-6">
                <a
                  href="mailto:ad.siddiqui2@gmail.com"
                  className="flex items-center gap-2 text-gray-400 hover:text-accent-400 transition-colors"
                >
                  <Mail className="h-6 w-6" />
                </a>
                <a
                  href="https://www.twitter.com/adeelsid7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-accent-400 transition-colors"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};