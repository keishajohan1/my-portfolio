import { portfolioData } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useEffect, useState } from 'react';

const SkillBar = ({ skill, isVisible }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setProgress(skill.proficiency);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.proficiency]);

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700 font-semibold">{skill.name}</span>
        <span className="text-primary font-bold">{skill.proficiency}%</span>
      </div>
      <div className="w-full bg-lightBg rounded-full h-4 overflow-hidden">
        <div
          className="bg-gradient-to-r from-primary to-secondary h-4 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="text-sm text-gray-500 mt-1">{skill.category}</span>
    </div>
  );
};

const Skills = () => {
  const [ref, isVisible] = useScrollAnimation({ triggerOnce: true });

  const skillsByCategory = portfolioData.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section
      id="skills"
      className="py-16 md:py-24 bg-lightBg"
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
            Skills
          </h2>
          <div className="max-w-3xl mx-auto">
            {Object.entries(skillsByCategory).map(([category, skills]) => (
              <div key={category} className="mb-8">
                <h3 className="text-xl font-semibold text-secondary mb-4">
                  {category}
                </h3>
                {skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} isVisible={isVisible} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

