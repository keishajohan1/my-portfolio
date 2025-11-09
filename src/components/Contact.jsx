import { portfolioData } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Mail, Linkedin, MapPin } from 'lucide-react';

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation({ triggerOnce: true });

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Get In Touch
          </h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-8">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about tech, business, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="flex items-center gap-3 bg-accent hover:bg-opacity-90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg"
              >
                <Mail size={24} />
                <span>{portfolioData.personal.email}</span>
              </a>
              <a
                href={portfolioData.personal.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-secondary hover:bg-opacity-90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg"
              >
                <Linkedin size={24} />
                <span>LinkedIn</span>
              </a>
            </div>
            <div className="mt-8 flex items-center justify-center gap-2 text-gray-600">
              <MapPin size={20} />
              <span>{portfolioData.personal.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

