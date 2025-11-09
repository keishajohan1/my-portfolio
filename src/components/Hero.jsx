import { useState } from 'react';
import { ArrowDown, Mail, Linkedin, User } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero = () => {
  const [ref, isVisible] = useScrollAnimation({ triggerOnce: true });
  const [imageError, setImageError] = useState(false);

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary to-secondary text-white pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div
          ref={ref}
          className={`text-center transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="mb-8">
            {!imageError ? (
              <img
                src={portfolioData.personal.profilePhoto}
                alt={portfolioData.personal.fullName}
                className="w-48 h-48 md:w-64 md:h-64 rounded-full mx-auto object-cover border-4 border-white shadow-2xl"
                loading="eager"
                onError={handleImageError}
              />
            ) : (
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full mx-auto bg-white bg-opacity-20 border-4 border-white shadow-2xl flex items-center justify-center">
                <User size={80} className="text-white opacity-50" />
              </div>
            )}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {portfolioData.personal.fullName}
          </h1>
          <p className="text-xl md:text-2xl mb-2 text-gray-200">
            {portfolioData.personal.headline}
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-300">
            {portfolioData.personal.location}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="bg-accent hover:bg-opacity-90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg"
            >
              <Mail size={20} />
              Get In Touch
            </a>
            <a
              href={portfolioData.personal.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary hover:bg-opacity-90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
          <button
            onClick={handleScrollToContact}
            className="animate-bounce text-white hover:text-accent transition-colors"
            aria-label="Scroll to contact"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

