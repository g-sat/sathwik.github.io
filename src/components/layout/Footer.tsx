import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© 2024 Sathwik Garikapati. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com" className="hover:text-violet-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" className="hover:text-violet-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com" className="hover:text-violet-400 transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;