import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="bg-orange-300 dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-gray-900 dark:text-white font-semibold text-lg">Recruitment Solution</h1>
          </div>
          <div className="flex">
            <a
              href="/"
              className="px-3 py-2 text-gray-700 dark:text-gray-300 text-sm font-medium"
            >
              Home
            </a>
            <a
              href="/login"
              className="px-3 py-2 text-gray-700 dark:text-gray-300 text-sm font-medium"
            >
               Login
            </a>
            <a
              href="/register"
              className="px-3 py-2 text-gray-700 dark:text-gray-300 text-sm font-medium"
            >
               Register
            </a>
            <a
              href="/"
              className="px-3 py-2 text-gray-700 dark:text-gray-300 text-sm font-medium"
            >
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
