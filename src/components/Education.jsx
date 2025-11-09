import { portfolioData } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { GraduationCap, MapPin, Calendar, Award, BookOpen } from 'lucide-react';

const EducationCard = ({ education, index, isVisible }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg p-6 mb-6 hover:shadow-xl transition-all duration-300 border-l-4 border-secondary ${
        isVisible
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 translate-x-10'
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div className="flex items-start gap-4 mb-4">
        <GraduationCap className="text-primary mt-1" size={32} />
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-primary mb-2">
            {education.degree}
          </h3>
          <p className="text-xl text-secondary font-semibold mb-2">
            {education.school}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
        <div className="flex items-center gap-2">
          <Calendar size={16} />
          <span>{education.timePeriod}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={16} />
          <span>{education.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Award size={16} />
          <span>GPA: {education.gpa}</span>
        </div>
      </div>
      {education.relevantCoursework && (
        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
            <BookOpen size={16} />
            Relevant Coursework:
          </h4>
          <div className="flex flex-wrap gap-2">
            {education.relevantCoursework.map((course, idx) => (
              <span
                key={idx}
                className="bg-lightBg text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      )}
      {education.relevantExperience && (
        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2">Relevant Experience:</h4>
          <div className="flex flex-wrap gap-2">
            {education.relevantExperience.map((exp, idx) => (
              <span
                key={idx}
                className="bg-lightBg text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {exp}
              </span>
            ))}
          </div>
        </div>
      )}
      {education.activitiesAndSocieties && (
        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2">Activities and Societies:</h4>
          <div className="flex flex-wrap gap-2">
            {education.activitiesAndSocieties.map((activity, idx) => (
              <span
                key={idx}
                className="bg-lightBg text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {activity}
              </span>
            ))}
          </div>
        </div>
      )}
      {education.note && (
        <p className="text-gray-600 italic mt-4">{education.note}</p>
      )}
    </div>
  );
};

const Education = () => {
  const [ref, isVisible] = useScrollAnimation({ triggerOnce: true });

  return (
    <section
      id="education"
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
            Education
          </h2>
          <div className="max-w-4xl mx-auto">
            {portfolioData.education.map((education, index) => (
              <EducationCard
                key={index}
                education={education}
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

export default Education;

