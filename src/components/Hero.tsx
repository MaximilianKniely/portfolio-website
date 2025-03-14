import React from 'react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Hi, I&apos;m <span className="text-indigo-600">Maximilian Kniely</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-lg sm:text-xl md:text-2xl text-gray-600 sm:max-w-3xl">
            Frontend Developer | Backend Developer | Problem Solver
          </p>
          <div className="mt-8 flex justify-center">
            <div className="rounded-md shadow">
              <a
                href="#projects"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                View My Work
              </a>
            </div>
            <div className="ml-3 rounded-md shadow">
              <a
                href="#contact"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}