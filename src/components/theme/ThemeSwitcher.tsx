import React from 'react';
import { Moon, Sun, Star } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setTheme('light')}
        className={`p-2 rounded-lg theme-transition ${
          theme === 'light'
            ? 'bg-light-primary text-white animate-star-float'
            : 'text-gray-400 hover:text-light-primary'
        }`}
        aria-label="Light theme"
      >
        <Sun size={20} />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-lg theme-transition ${
          theme === 'dark'
            ? 'bg-dark-primary text-white animate-star-float'
            : 'text-gray-400 hover:text-dark-primary'
        }`}
        aria-label="Dark theme"
      >
        <Moon size={20} />
      </button>
      <button
        onClick={() => setTheme('astra')}
        className={`p-2 rounded-lg theme-transition ${
          theme === 'astra'
            ? 'bg-astra-primary text-white animate-star-float'
            : 'text-gray-400 hover:text-astra-primary'
        }`}
        aria-label="Astra theme"
      >
        <Star size={20} />
      </button>
    </div>
  );
};

export default ThemeSwitcher;