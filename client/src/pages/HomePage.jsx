import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TravelSVG from "../assets/travel-illustration.svg";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
<div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white flex flex-col font-sans overflow-x-hidden">
  {/* Navbar */}
  <nav className="sticky top-0 z-50 bg-indigo-950/90 backdrop-blur-lg shadow-xl">
    <div className="max-w-7xl mx-auto px-6 sm:px-8">
      <div className="flex items-center h-16 justify-between">
        {/* Logo with right padding */}
        <div className="text-white font-bold text-xl pr-10 sm:pr-12">TripTracker</div>

        {/* Navigation Links with GUARANTEED spacing */}
        <div className="flex items-center [&>a]:mx-2">
          <a href="#" className="text-white text-base hover:text-pink-400 px-4 py-2 transition-colors duration-200">Home</a>
          <a href="#" className="text-white text-base hover:text-pink-400 px-4 py-2 transition-colors duration-200">Features</a>
          <a href="#" className="text-white text-base hover:text-pink-400 px-4 py-2 transition-colors duration-200">About</a>
          <a href="#" className="text-white text-base hover:text-pink-400 px-4 py-2 transition-colors duration-200">Contact</a>
        </div>
      </div>
    </div>
  </nav>

      {/* Hero Section */}
      <main className="flex-grow px-6 sm:px-8 md:px-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center lg:text-left space-y-8 max-w-2xl mx-auto lg:mx-0"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight"
            >
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Track Your Trips
              </span>{" "}
              <span className="inline-block animate-bounce">✈️</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl font-medium text-white/90"
            >
              All your travel plans, expenses, and memories in one beautiful dashboard.
              Never forget an adventure again.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                to="/add-trip"
                className="relative overflow-hidden group bg-white text-indigo-900 font-bold py-4 px-8 rounded-xl shadow-2xl hover:shadow-pink-500/20 transition-all duration-300"
              >
                <span className="relative z-10">➕ Add New Trip</span>
                <span className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
              </Link>
              <Link
                to="/trips"
                className="relative overflow-hidden group bg-transparent border-2 border-white/30 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:border-pink-400 transition-all duration-300"
              >
                <span className="relative z-10">🌍 View All Trips</span>
                <span className="absolute inset-0 bg-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-all duration-300"></span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative"
          >
            <motion.img
              src={TravelSVG}
              alt="Travel Illustration"
              className="w-full max-h-[500px] object-contain mx-auto cursor-pointer"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
            <motion.div
              className="absolute -z-10 w-full h-full bg-pink-500/20 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </main>

      {/* Recent Trips Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 py-16 md:py-24">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            🌍 Recent Adventures
          </span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              place: "Paris, France",
              date: "May 2024",
              memory: "Visited Eiffel Tower and tried authentic French cuisine at a charming bistro.",
              color: "from-blue-500/10 to-indigo-500/10"
            },
            {
              place: "Kyoto, Japan",
              date: "March 2024",
              memory: "Cherry blossoms in full bloom while exploring ancient temples and shrines.",
              color: "from-pink-500/10 to-purple-500/10"
            },
            {
              place: "New York, USA",
              date: "Jan 2024",
              memory: "Broadway shows, iconic bagels, and snowy walks through Central Park.",
              color: "from-amber-500/10 to-orange-500/10"
            },
          ].map((trip, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`bg-gradient-to-br ${trip.color} backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/10 hover:border-pink-400/30 transition-all duration-300 hover:-translate-y-2`}
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">
                  {idx === 0 ? "🗼" : idx === 1 ? "🌸" : "🏙️"}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{trip.place}</h3>
                  <p className="text-sm text-pink-300 font-medium mt-1">{trip.date}</p>
                  <p className="text-white/90 mt-3">{trip.memory}</p>
                  <button className="mt-4 text-sm font-medium text-pink-300 hover:text-pink-200 transition-colors">
                    View Details →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 backdrop-blur-md py-16 md:py-24 px-6 sm:px-8 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
              ✨ Why Choose TripTracker?
            </span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: "📝",
                title: "Plan Easily",
                desc: "Add trips with dates, locations and budgets in just a few clicks.",
                color: "bg-indigo-500/20"
              },
              {
                icon: "💰",
                title: "Track Expenses",
                desc: "Monitor your travel spending with intuitive charts and categories.",
                color: "bg-purple-500/20"
              },
              {
                icon: "📸",
                title: "Save Memories",
                desc: "Store photos, notes, and highlights from your adventures.",
                color: "bg-pink-500/20"
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`${feature.color} rounded-2xl p-8 shadow-lg border border-white/10 hover:border-pink-400/50 transition-all duration-300`}
              >
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white/80">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 py-16 md:py-24">
        <motion.div
          className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-pink-400 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-indigo-400 rounded-full filter blur-3xl opacity-20"></div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-lg text-white/90 mb-8">
              Join thousands of travelers who are documenting their adventures with TripTracker.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="px-8 py-4 rounded-xl bg-white text-indigo-900 font-bold shadow-lg hover:scale-105 transition-all duration-300"
              >
                🚀 Get Started - It's Free
              </Link>
              <Link
                to="/demo"
                className="px-8 py-4 rounded-xl bg-transparent border-2 border-white/30 text-white font-bold hover:border-white/60 transition-all duration-300"
              >
                🎬 Watch Demo
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-950/90 backdrop-blur-lg border-t border-white/10 py-12 px-6 sm:px-8 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  TripTracker
                </span>
                ✈️
              </h3>
              <p className="text-white/70">
                Your ultimate travel companion for documenting adventures around the world.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Navigation</h4>
              <ul className="space-y-2">
                {["Home", "Add Trip", "All Trips", "Expenses", "Memories"].map((item) => (
                  <li key={item}>
                    <Link
                      to={`/${item === "Home" ? "" : item.toLowerCase().replace(" ", "-")}`}
                      className="text-white/70 hover:text-pink-300 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-2">
                {["About Us", "Careers", "Blog", "Press", "Contact"].map((item) => (
                  <li key={item}>
                    <Link
                      to={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="text-white/70 hover:text-pink-300 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Connect With Us</h4>
              <div className="flex gap-4 mb-4">
                {["Twitter", "Instagram", "Facebook", "YouTube"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    aria-label={social}
                  >
                    {social === "Twitter" ? "🐦" :
                      social === "Instagram" ? "📷" :
                        social === "Facebook" ? "👍" : "▶️"}
                  </a>
                ))}
              </div>
              <p className="text-white/70">Subscribe to our newsletter</p>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              &copy; {new Date().getFullYear()} TripTracker. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}