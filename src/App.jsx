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
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-base">
              &copy; {new Date().getFullYear()} Lazy DUNIA. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
