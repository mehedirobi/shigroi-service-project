import { useState } from "react";
import { motion } from "framer-motion";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      return setError("All fields are required");
    }
    if (formData.password.length < 6) {
      return setError("Password must be at least 6 characters");
    }
    setError("");
    setLoading(true);

    try {
      console.log("Register Data:", formData);
      await new Promise((res) => setTimeout(res, 1000));
    } catch {
      setError("Failed to register");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
        className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8"
      >
        {/* Header */}
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">
          Create Account
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Join ShigroiService to find or offer services
        </p>

        {/* Error */}
        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-4 text-sm text-red-500 bg-red-50 p-2 rounded"
          >
            {error}
          </motion.div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {["name", "email", "password"].map((field, idx) => (
            <motion.div
              key={field}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + idx * 0.1 }}
            >
              <label className="text-sm text-gray-600 capitalize">
                {field === "name"
                  ? "Full Name"
                  : field === "email"
                  ? "Email"
                  : "Password"}
              </label>
              <input
                type={field === "password" ? "password" : "text"}
                name={field}
                placeholder={
                  field === "name"
                    ? "Your full name"
                    : field === "email"
                    ? "Your email"
                    : "Create a password"
                }
                value={formData[field]}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </motion.div>
          ))}

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label className="text-sm text-gray-600">Register as</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="customer">Customer</option>
              <option value="provider">Service Provider</option>
            </select>
          </motion.div>

          {/* Button */}
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-70"
          >
            {loading ? "Registering..." : "Register"}
          </motion.button>
        </form>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-sm text-center text-gray-500 mt-6"
        >
          Already have an account?{" "}
          <span className="text-blue-600 cursor-pointer hover:underline">
            Login
          </span>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Register;