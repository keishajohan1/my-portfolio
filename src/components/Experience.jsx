import { portfolioData } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { MapPin, Calendar } from 'lucide-react';

const ExperienceCard = ({ experience, index, isVisible }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg p-6 mb-6 hover:shadow-xl transition-all duration-300 border-l-4 border-accent ${
        isVisible
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 -translate-x-10'
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <div>
          <h3 className="text-2xl font-bold text-primary mb-2">
            {experience.jobTitle}
          </h3>
          <p className="text-xl text-secondary font-semibold mb-2">
            {experience.companyName}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
        <div className="flex items-center gap-2">
          <Calendar size={16} />
          <span>{experience.timePeriod}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={16} />
          <span>{experience.location}</span>
        </div>
      </div>
      <ul className="space-y-2">
        {experience.responsibilities.map((responsibility, idx) => (
          <li key={idx} className="flex items-start gap-2 text-gray-700">
            <span className="text-accent mt-1">•</span>
            <span>{responsibility}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  const [ref, isVisible] = useScrollAnimation({ triggerOnce: true });

  return (
    <section
      id="experience"
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
            Experience
          </h2>
          <div className="max-w-4xl mx-auto">
            {portfolioData.experience.map((experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

