import React from 'react';

// Custom SVG Icons
const RocketIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-indigo-500">
    <path d="M4.5 16.5c-1.5 1.5-3 1-3-4.5s2.5-12 11-14c.5-1.5 1-2 3.5-2h0a2.5 2.5 0 0 1 2.5 2.5v0c-1 2.5-1.5 4-2.5 7.5s-6 8-11 11c-1.5 1.5-2 3-3.5 3.5s-3-2-2.5-3.5h0Z" />
    <path d="m11.5 15.5 5.5 5.5c1.5-1.5 1.5-3 0-4.5s-1.5-1.5-3 0s-1-3.5 2.5-3.5h0a2.5 2.5 0 0 1 2.5 2.5v0c-1 2.5-1.5 4-2.5 7.5s-6 8-11 11c-1.5 1.5-2 3-3.5 3.5s-3-2-2.5-3.5h0Z" />
    <path d="M11.5 15.5 5.5 9.5c1.5-1.5 1.5-3 0-4.5s-1.5-1.5-3 0s-1-3.5 2.5-3.5h0a2.5 2.5 0 0 1 2.5 2.5v0c-1 2.5-1.5 4-2.5 7.5s-6 8-11 11c-1.5 1.5-2 3-3.5 3.5s-3-2-2.5-3.5h0Z" />
    <path d="M11.5 15.5 17.5 9.5c-1.5 1.5-3 1.5-4.5 0s-1.5-3 0-4.5s-3.5-1-3.5 2.5v0a2.5 2.5 0 0 0 2.5 2.5v0c2.5-1 4-1.5 7.5-2.5s8-6 11-11c1.5-1.5 3-2 3.5-3.5s-2-3-3.5-2.5v0Z" />
  </svg>
);

const UpcomingAppSection = () => (
  <div className="py-20 w-screen overflow-x-hidden">
    <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 lg:p-16 text-center max-w-4xl mx-auto">
      <div className="mb-6 flex justify-center">
        <div className="p-4 bg-indigo-100 rounded-full">
          <RocketIcon />
        </div>
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Our Next App: <span className="text-pink-600">LazyShare</span>
      </h2>
<p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
  We're building <span className="font-semibold">LazyShare</span>, a fast and secure file transfer app that lets you easily
  share data between your mobile device and laptop, or vice versa—wirelessly.  
  Whether it's photos, videos, documents, or files of any size, LazyShare makes data sharing seamless and lightning-fast.
</p>
      <div className="mt-12">
        <div className="bg-gray-100 rounded-xl px-6 py-4 inline-block">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
            Coming Soon!
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default UpcomingAppSection;
