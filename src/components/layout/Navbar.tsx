import React from 'react';
import { Menu, Cpu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ThemeSwitcher from '../theme/ThemeSwitcher';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-astra-background/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Cpu className="h-8 w-8 text-astra-primary animate-pulse" />
            <span className="text-2xl font-bold astra-text">SG</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${
                  location.pathname === item.path
                    ? 'text-astra-primary animate-cosmic-pulse'
                    : 'text-astra-text hover:text-astra-secondary'
                } transition-colors duration-200`}
              >
                {item.label}
              </Link>
            ))}
            <ThemeSwitcher />
          </div>

          <button
            className="md:hidden text-astra-primary hover:text-astra-secondary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-astra-surface/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${
                  location.pathname === item.path
                    ? 'text-astra-primary'
                    : 'text-astra-text hover:text-astra-secondary'
                } block px-3 py-2 text-base`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-3 py-2">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;