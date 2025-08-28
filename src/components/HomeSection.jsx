import React from 'react';
import { useNavigate } from "react-router-dom";

const HomeSection = () => {
  const navigate = useNavigate();
  return (
    <div className="py-20 w-full min-h-screen flex flex-col items-center justify-center px-4">
      
      {/* Headline */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight text-center">
        Apps That <span className="text-indigo-600">Make Your Life Better</span>
      </h1>
      
      {/* Description */}
      <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl 
                    text-justify sm:text-center">
        At <span className="font-semibold">Lazy DUNIA</span>, we create apps that make life easier, smarter, and more fun.
        From powerful tools to educational apps to engaging games, our mission is simple: build apps that add value to your
        everyday life. Every app we publish on the Play Store is designed with purpose, creativity, and your needs in mind.
      </p>
      
      {/* Button */}
      <div className="mt-10">
        <button
          onClick={() => navigate("/our-apps")}
          className="bg-indigo-600 text-white text-lg font-medium px-8 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Explore Our Apps
        </button>
      </div>
      
    </div>
  );
};

export default HomeSection;
