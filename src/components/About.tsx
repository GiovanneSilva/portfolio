import React from 'react';
import { Building } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const ProfilePicture = () => (
    <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
      <img src="src\components\images\me.jpg" alt="Profile" className="w-full h-full object-cover" />
    </div>
  );

  const career = [
    {
      icon: <Building className="w-6 h-6" />,
      titleKey: 'about.career.empresa1.title',
      descriptionKey: 'about.career.empresa1.description',
    },
    {
      icon: <Building className="w-6 h-6" />,
      titleKey: 'about.career.empresa2.title',
      descriptionKey: 'about.career.empresa2.description',
    },
  ];

  // Função para substituir \n por <br />
  const formatDescription = (description: string) => {
    return description.split('\n').map((item, index) => (
      <span key={index}>
        {item}
        <br />
      </span>
    ));
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Foto de Perfil */}
        <ProfilePicture />

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('about.title')}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {career.map((career, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-gray-900 dark:bg-gray-700 rounded-lg flex items-center justify-center text-white mb-4">
                {career.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {t(career.titleKey)}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {formatDescription(t(career.descriptionKey))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
