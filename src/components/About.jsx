import { portfolioData } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const [ref, isVisible] = useScrollAnimation({ triggerOnce: true });

  return (
    <section
      id="about"
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
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {portfolioData.personal.bio.split('\n\n').map((paragraph, index) => (
                <p
                  key={index}
                  className="text-gray-700 mb-4 leading-relaxed text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

