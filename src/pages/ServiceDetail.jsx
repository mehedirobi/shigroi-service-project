// src/pages/ServiceDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { services } from "../data/services"; // make sure services.js exist

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === parseInt(id));

  if (!service) {
    return (
      <div className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Service Not Found</h2>
        <p className="text-gray-600 mb-6">
          The service you are looking for does not exist.
        </p>
        <Link
          to="/services"
          className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition duration-300"
        >
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <section className="py-16 min-h-[80vh] bg-gray-50 dark:bg-gray-900 flex flex-col justify-center items-center text-center px-6">
      <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        {service.name}
      </h2>
      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
        {service.details}
      </p>
      <Link
        to="/services"
        className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition duration-300"
      >
        Back to Services
      </Link>
    </section>
  );
};

export default ServiceDetail;
