  import React, { useState } from 'react';
  import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
  import HomeSection from './components/HomeSection';
  import CurrentAppSection from './components/OurAppSection';
  import UpcomingAppSection from './components/UpcomingAppSection';

  const App = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const NavItem = ({ to, label }) => (
      <Link
        to={to}
        onClick={() => setMenuOpen(false)}
        className="group relative inline-flex items-center text-lg md:text-xl font-medium text-slate-700 hover:text-slate-900 transition-colors"
      >
        {label}
        <span
          className="pointer-events-none absolute -bottom-1 left-0 h-[3px] rounded-full bg-sky-500 transition-all duration-300 w-0 group-hover:w-full"
        />
      </Link>
    );

    return (
      <Router>
        <div className="bg-slate-50 font-sans text-slate-800 min-h-screen flex flex-col antialiased max-w-full overflow-x-hidden">
          {/* Navbar */}
          <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 supports-[backdrop-filter]:bg-white/60 border-b border-white/20">
            <div className="relative">
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20 relative">
                
                {/* Mobile burger button aligned with page padding */}
                <div className="absolute left-4 md:hidden">
                  <button
                    aria-label="Toggle menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="inline-flex items-center justify-center rounded-xl ring-1 ring-slate-200/70 bg-white/60 backdrop-blur-xl px-3 py-2 transition hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-slate-700"
                    >
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                  </button>
                </div>

                {/* Brand / Title */}
                <div className="flex-1 text-center md:text-left">
                  <h1
                    className="text-3xl md:text-4xl font-bold cursor-pointer"
                    style={{ fontFamily: 'Georgia, Times New Roman, serif', color: '#1E40AF' }}
                  >
                    <Link to="/">Lazy DUNIA</Link>
                  </h1>
                </div>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-10">
                  <NavItem to="/" label="Home" />
                  <NavItem to="/our-apps" label="Our Apps" />
                  <NavItem to="/upcoming-apps" label="Upcoming Apps" />
                </div>
              </div>

              {/* Mobile menu panel */}
              {menuOpen && (
                <div className="md:hidden mx-4 mt-2 rounded-2xl bg-white/80 backdrop-blur-xl ring-1 ring-slate-200 shadow-lg overflow-hidden">
                  <div className="flex flex-col">
                    <Link
                      to="/"
                      onClick={() => setMenuOpen(false)}
                      className="px-4 py-4 text-lg font-medium transition flex items-center text-slate-700 hover:bg-slate-50"
                    >
                      Home
                    </Link>
                    <Link
                      to="/our-apps"
                      onClick={() => setMenuOpen(false)}
                      className="px-4 py-4 text-lg font-medium transition flex items-center text-slate-700 hover:bg-slate-50"
                    >
                      Our Apps
                    </Link>
                    <Link
                      to="/upcoming-apps"
                      onClick={() => setMenuOpen(false)}
                      className="px-4 py-4 text-lg font-medium transition flex items-center text-slate-700 hover:bg-slate-50"
                    >
                      Upcoming Apps
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Main Section */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomeSection />} />
              <Route path="/our-apps" element={<CurrentAppSection />} />
              <Route path="/upcoming-apps" element={<UpcomingAppSection />} />
            </Routes>
          </main>

          {/* Footer */}
     <footer className="bg-slate-900 text-white py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Connect with us</h3>
            <div className="flex justify-center space-x-6">
              {/* Twitter Icon */}
              <a href="https://x.com/lazydunia" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.007-.533A8.303 8.303 0 0022 5.564a8.136 8.136 0 01-2.357.646A4.128 4.128 0 0021.6 4c-.81.48-1.711.838-2.652 1.03a4.096 4.096 0 00-6.993 3.733 11.611 11.611 0 01-8.457-4.276 4.07 4.07 0 001.27 5.483c-.792-.025-1.528-.24-2.17-.597a4.053 4.053 0 003.29 4.008 4.048 4.048 0 01-1.834.07a4.127 4.127 0 003.834 2.85A8.23 8.23 0 012 18.29a11.616 11.616 0 006.29 1.96" />
                </svg>
              </a>
              {/* Instagram Icon */}
              <a   href="https://www.instagram.com/lazyduniaofficial/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                </svg>
              </a>
              {/* Facebook Icon */}
              <a   href="https://web.facebook.com/profile.php?id=61580000726784" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.006 3.657 9.127 8.438 9.878v-6.988h-2.54v-2.89h2.54v-2.197c0-2.508 1.493-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.87h2.773l-.443 2.89h-2.33v6.988C18.343 21.127 22 17.006 22 12z" />
                </svg>
              </a>
              {/* TikTok Icon (newly added) */}
              <a href="https://www.tiktok.com/@lazyduniaofficial" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12.5 3c.47 1.76 1.8 3.14 3.5 3.58v3.12a6.5 6.5 0 0 1-3.5-1.02v6.82a4 4 0 1 1-4-4c.14 0 .27.01.4.02v2.13a1.9 1.9 0 1 0 1.6 1.87V3h2.5z"/>
</svg>

              </a>
            </div>
          </div>
          <p className="text-base text-gray-400 mt-4">
            <a href="mailto:lazydunia.contact@gmail.com" className="hover:text-white transition-colors">lazydunia.contact@gmail.com</a>
          </p>
          <p className="text-base text-gray-400 mt-4">
            &copy; {new Date().getFullYear()} Lazy DUNIA. All rights reserved.
          </p>
        </div>
      </footer>
        </div>
      </Router>
    );
  };

  export default App;
