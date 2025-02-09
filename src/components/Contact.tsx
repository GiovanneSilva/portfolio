import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('contact.title')}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 justify-center">
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">{t('contact.info')}</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-gray-600 dark:text-gray-400 mr-3" />
                <span className="text-gray-600 dark:text-gray-400">vani.zito@email.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-gray-600 dark:text-gray-400 mr-3" />
                <span className="text-gray-600 dark:text-gray-400">55 (11) 98655-3573</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-gray-600 dark:text-gray-400 mr-3" />
                <span className="text-gray-600 dark:text-gray-400">Osasco, SP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;