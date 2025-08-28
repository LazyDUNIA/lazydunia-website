import React from 'react';
import { useNavigate } from "react-router-dom";

const HomeSection = () => {
   const navigate = useNavigate();
  return (
    <div className="py-20 w-full min-h-screen">
      <div className="max-w-4xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 lg:p-16">
          
          {/* ✅ Centered headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight text-center">
            Apps That <span className="text-indigo-600">Make Your Life Better</span>
          </h1>
          
          {/* ✅ Justified description */}
          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto text-justify">
            At <span className="font-semibold">Lazy DUNIA</span>, we create apps that make life easier, smarter, and more fun.
            From powerful tools to educational apps to engaging games, our mission is simple: build apps that add value to your
            everyday life. Every app we publish on the Play Store is designed with purpose, creativity, and your needs in mind.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => navigate("/our-apps")}
              className="bg-indigo-600 text-white text-lg font-medium px-8 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full sm:w-auto"
            >
              Explore Our Apps
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
