import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaToolbox, FaMoneyBillWave, FaClipboardList } from "react-icons/fa";

const stats = [
  { id: 1, title: "Total Users", value: 1245, icon: <FaUser size={25} className="text-indigo-600" /> },
  { id: 2, title: "Total Services", value: 342, icon: <FaToolbox size={25} className="text-green-500" /> },
  { id: 3, title: "Earnings", value: "$12,450", icon: <FaMoneyBillWave size={25} className="text-yellow-500" /> },
  { id: 4, title: "Pending Requests", value: 17, icon: <FaClipboardList size={25} className="text-red-500" /> },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 lg:p-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8"
      >
        Dashboard
      </motion.h1>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-xl shadow p-5 flex items-center gap-4 hover:shadow-xl transition"
          >
            <div className="p-3 bg-indigo-50 rounded-full">{stat.icon}</div>
            <div>
              <p className="text-gray-500 text-sm">{stat.title}</p>
              <p className="text-lg font-bold text-gray-800">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-xl shadow p-6"
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
            Add Service
          </button>
          <button className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
            View Users
          </button>
          <button className="bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition">
            Earnings
          </button>
          <button className="bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
            Pending Requests
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;