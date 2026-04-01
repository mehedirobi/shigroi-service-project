import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const categories = [
  "Electrician",
  "Plumber",
  "Cleaner",
  "Carpenter",
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-indigo-100 px-6 overflow-hidden">
      
      {/* Background Blur Circle */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-200 rounded-full blur-3xl opacity-30 top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-indigo-300 rounded-full blur-3xl opacity-20 bottom-[-100px] right-[-100px]" />

      <div className="max-w-4xl w-full text-center z-10">
        
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight"
        >
          Find Trusted Local Services{" "}
          <span className="text-indigo-600">Instantly</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-gray-600 text-lg md:text-xl"
        >
          Electrician, Plumber, Cleaner, Carpenter — everything you need,
          fast, reliable, and{" "}
          <span className="text-indigo-600 font-semibold">
            just a click away
          </span>.
        </motion.p>

        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-3 bg-white shadow-md p-3 rounded-xl"
        >
          <input
            type="text"
            placeholder="Search services (e.g. electrician)"
            className="flex-1 px-4 py-2 outline-none text-gray-700"
          />
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">
            Search
          </button>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 flex flex-wrap justify-center gap-3"
        >
          {categories.map((cat, index) => (
            <span
              key={index}
              className="px-4 py-1 text-sm bg-indigo-100 text-indigo-600 rounded-full"
            >
              {cat}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link
            to="/services"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition transform hover:scale-105"
          >
            Find Services
          </Link>

          <Link
            to="/register"
            className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition transform hover:scale-105"
          >
            Become a Provider
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;