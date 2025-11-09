import { portfolioData } from '../data/portfolioData';
import { Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">{portfolioData.personal.fullName}</p>
            <p className="text-gray-300">{portfolioData.personal.headline}</p>
          </div>
          <div className="flex gap-6">
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="text-white hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href={portfolioData.personal.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-600 text-center">
          <p className="text-gray-300 flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-accent" /> by {portfolioData.personal.fullName}
          </p>
          <p className="text-gray-400 text-sm mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

