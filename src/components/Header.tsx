import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">Portfolio</div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">{t('nav.home')}</a>
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">{t('nav.about')}</a>
            <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">{t('nav.projects')}</a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">{t('nav.contact')}</a>
            <div className="flex items-center space-x-2">
              <ThemeSwitcher />
              <LanguageSwitcher />
            </div>
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/GiovanneSilva" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/giovanne-silva-3b91aa197/" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:vani.zito@email.com" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700 dark:text-gray-300" onClick={toggleMenu}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                {t('nav.home')}
              </a>
              <a href="#about" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                {t('nav.about')}
              </a>
              <a href="#projects" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                {t('nav.projects')}
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                {t('nav.contact')}
              </a>
              <div className="px-3 py-2 flex items-center space-x-2">
                <ThemeSwitcher />
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;