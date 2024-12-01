import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Hi, I'm <span className="text-violet-400">Sathwik Garikapati</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl">
          A passionate developer crafting beautiful and functional web experiences.
          Specializing in modern web technologies and creative solutions.
        </p>
        <div className="flex space-x-4">
          <Link
            to="/portfolio"
            className="inline-flex items-center px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
          >
            View My Work
            <ArrowRight className="ml-2" size={20} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 border border-violet-400 text-violet-400 rounded-lg hover:bg-violet-400 hover:text-white transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;