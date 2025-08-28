import React from 'react';

// Custom SVG Icons
const CheckCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-green-500">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <path d="M22 4 12 14.01l-3-3" />
  </svg>
);

const BookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-pink-500">
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20h-4v-4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2Z" />
    <path d="M8 2h12v20H8a2 2 0 0 1-2-2Z" />
  </svg>
);

// Changed the component name from CurrentAppSection to OurAppSection
const OurAppSection = () => (
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 max-w-full overflow-x-hidden">
    <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 lg:p-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-10">
        <span className="text-indigo-600">English Urdu Dictionary Pro</span>
      </h2>
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
        <div className="w-full md:w-1/2">
          <div className="bg-gray-200 rounded-2xl p-6 flex justify-center items-center overflow-hidden shadow-inner">
            <div className="bg-gray-800 rounded-3xl p-4 shadow-lg transform rotate-6">
              <BookIcon />
              <div className="mt-4 p-4 bg-white rounded-xl shadow-inner">
                <p className="text-gray-800 text-sm">Dictionary App</p>
                <div className="h-40 bg-gray-100 rounded-lg mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            English Urdu Dictionary Pro is a fast and comprehensive offline dictionary designed for students and professionals. With powerful features like OCR and quizzes, it’s the ultimate tool to boost your language skills.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <CheckCircleIcon />
              <span className="text-lg text-gray-700">Easily translate English words to Urdu</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircleIcon />
              <span className="text-lg text-gray-700">Fast and simple search interface</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircleIcon />
              <span className="text-lg text-gray-700">Includes meanings, pronunciation, synonyms, antonyms</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircleIcon />
              <span className="text-lg text-gray-700">Works offline – no internet required</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircleIcon />
              <span className="text-lg text-gray-700">OCR & image recognition – translate text and identify objects</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircleIcon />
              <span className="text-lg text-gray-700">Quizzes, favorites, and history to boost learning</span>
            </div>
          </div>
          <div className="mt-8">
            <button
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.hfad.personaldictionary', '_blank')}
                className="bg-blue-600 text-white text-lg font-medium px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                Get it on Google Play
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default OurAppSection;
