import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ServiceCard = ({ service }) => {
  const { id, name, description } = service;

  return (
    <motion.div
      className="border p-5 rounded-xl shadow bg-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, boxShadow: "0 20px 25px rgba(0,0,0,0.15)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <p className="text-gray-600 mb-4">{description}</p>

      <Link
        to={`/services/${id}`}
        className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition transform"
      >
        View Details
      </Link>
    </motion.div>
  );
};

export default ServiceCard;