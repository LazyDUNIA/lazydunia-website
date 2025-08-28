import React from 'react';

// Custom SVG Icons
const CheckCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-green-500">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <path d="M22 4 12 14.01l-3-3" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-pink-500">
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
    <path d="M12 18h.01" />
  </svg>
);

// Main App showcase component
const OurAppSection = () => (
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 max-w-full overflow-x-hidden">
    <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 lg:p-16">
      {/* Updated Title Styling */}
      <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-10 tracking-wide">
        English Urdu <span className="text-indigo-600">Dictionary Pro</span>
      </h2>
      <div className="flex flex-col lg:flex-row items-center space-y-12 lg:space-y-0 lg:space-x-16">
        {/* Left Column - Phone Mockup and Image */}
        <div className="w-full lg:w-1/2 flex justify-center p-8 bg-gray-100 rounded-2xl shadow-inner">
          <div className="relative w-full max-w-sm aspect-[9/18] bg-gray-800 rounded-3xl shadow-lg transform rotate-3 -translate-y-4 transition-transform duration-500 ease-in-out hover:rotate-0 hover:translate-y-0">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full bg-gray-600"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] aspect-[9/18] overflow-hidden rounded-[20px]">
              {/* This is the new placeholder image */}
              <img 
                src="https://placehold.co/400x800/3b82f6/ffffff?text=Dictionary+App+UI" 
                alt="English Urdu Dictionary Pro App on a smartphone" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-20 h-2 rounded-full bg-gray-600"></div>
          </div>
        </div>

        {/* Right Column - Features and Button */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
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
          {/* New Google Play Button */}
          <div className="mt-12 flex justify-center lg:justify-start">
            <a href="https://play.google.com/store/apps/details?id=com.hfad.personaldictionary" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-gray-900 text-white rounded-full px-6 py-3 shadow-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white">
                <path d="M2.035 1.545a1 1 0 011.666-.027l18.5 9a1 1 0 010 1.74l-18.5 9a1 1 0 01-1.666-.973L3.6 12 2.035 1.545z" />
              </svg>
              <span className="font-semibold">Get it on Google Play</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default OurAppSection;
