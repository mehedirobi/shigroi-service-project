import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">

        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-indigo-600">ShigroiService</h2>
          <p className="mt-4 text-gray-600 leading-relaxed max-w-sm">
            Fast, trusted, and local services for your home or business — all in one place.{" "}
            <span className="text-indigo-600 font-medium">Just a click away.</span>
          </p>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "Services", "Contact"].map((link, i) => (
              <li key={i}>
                <Link
                  to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                  className="text-gray-600 hover:text-indigo-600 transition"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact</h3>
          <div className="space-y-2 text-gray-600">
            <p>Email: shigroiservice@gmail.com</p>
            <p>Phone: +8801336458100</p>
          </div>

          {/* Social */}
          <div className="flex gap-4 mt-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.15 }}
              className="text-gray-600 hover:text-indigo-600 transition"
            >
              <FaFacebook size={22} />
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.15 }}
              className="text-gray-600 hover:text-pink-500 transition"
            >
              <FaInstagram size={22} />
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.15 }}
              className="text-gray-600 hover:text-black transition"
            >
              <BsTwitterX size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="border-t text-center py-4 text-sm text-gray-500"
      >
        © {new Date().getFullYear()} ShigroiService. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;