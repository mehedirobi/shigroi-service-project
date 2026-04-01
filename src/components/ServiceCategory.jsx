import { Link } from "react-router-dom";
import { FaBolt, FaTools, FaBroom, FaChair } from "react-icons/fa";
import { services } from "../data/services";
import { motion } from "framer-motion";

const icons = {
  1: <FaBolt size={30} className="text-yellow-500" />,
  2: <FaTools size={30} className="text-blue-500" />,
  3: <FaBroom size={30} className="text-green-500" />,
  4: <FaChair size={30} className="text-orange-500" />,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServiceCategory = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center font-bold text-4xl border-b-4 pb-2 text-indigo-600 mb-20">
          Choose from our most requested services
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px rgba(0,0,0,0.15)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to={`/services/${service.id}`}
                className="bg-indigo-50 border-4 border-indigo-600 p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
              >
                {icons[service.id]}
                <h3 className="mt-4 text-xl text-gray-800 font-bold">{service.name}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCategory;