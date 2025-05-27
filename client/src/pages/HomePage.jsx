import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600 text-white flex flex-col">
      {/* Navbar */}
      <nav className="sticky top-0 bg-indigo-900 bg-opacity-80 backdrop-blur-md shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between h-16">
          <Link
            to="/"
            className="text-2xl font-extrabold tracking-wide hover:text-pink-400 transition"
          >
            TripTracker ✈️
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-10 font-semibold text-white">
            <Link to="/" className="hover:text-pink-400 transition">
              Home
            </Link>
            <Link to="/add-trip" className="hover:text-pink-400 transition">
              Add Trip
            </Link>
            <Link to="/trips" className="hover:text-pink-400 transition">
              All Trips
            </Link>
            <Link to="/expenses" className="hover:text-pink-400 transition">
              Expenses
            </Link>
            <Link to="/memories" className="hover:text-pink-400 transition">
              Memories
            </Link>
            <Link to="/profile" className="hover:text-pink-400 transition">
              Profile
            </Link>
            <Link to="/about" className="hover:text-pink-400 transition">
              About
            </Link>
            <Link to="/contact" className="hover:text-pink-400 transition">
              Contact
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:text-pink-400 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-indigo-900 bg-opacity-90 backdrop-blur-md px-6 pb-4 space-y-4 text-white font-semibold text-lg">
            <Link
              to="/"
              className="block hover:text-pink-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/add-trip"
              className="block hover:text-pink-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              Add Trip
            </Link>
            <Link
              to="/trips"
              className="block hover:text-pink-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              All Trips
            </Link>
            <Link
              to="/expenses"
              className="block hover:text-pink-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              Expenses
            </Link>
            <Link
              to="/memories"
              className="block hover:text-pink-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              Memories
            </Link>
            <Link
              to="/profile"
              className="block hover:text-pink-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              Profile
            </Link>
            <Link
              to="/about"
              className="block hover:text-pink-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block hover:text-pink-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-3xl bg-white bg-opacity-20 backdrop-blur-md rounded-3xl p-12 shadow-xl text-center space-y-12">
          <h1 className="text-6xl font-extrabold tracking-wide drop-shadow-lg">
            ✈️ Trip Tracker Dashboard
          </h1>
          <p className="text-lg md:text-xl font-medium max-w-xl mx-auto drop-shadow-md">
            Plan, track, and relive your adventures. Organize trips, manage expenses,
            and save your travel memories all in one beautiful dashboard!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
            <Link
              to="/add-trip"
              className="inline-block bg-white text-indigo-700 font-bold py-4 px-8 rounded-2xl shadow-lg hover:scale-105 hover:bg-indigo-50 transition transform duration-300"
              aria-label="Add New Trip"
            >
              ➕ Add New Trip
            </Link>
            <Link
              to="/trips"
              className="inline-block bg-indigo-700 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:scale-105 hover:bg-indigo-800 transition transform duration-300"
              aria-label="View All Trips"
            >
              📋 View All Trips
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-indigo-900 bg-opacity-80 backdrop-blur-md text-center py-6 mt-auto text-sm text-indigo-200">
        <p>
          &copy; {new Date().getFullYear()} TripTracker. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
