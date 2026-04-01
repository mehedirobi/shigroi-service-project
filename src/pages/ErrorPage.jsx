import React from "react";
import { Link } from "react-router-dom";


const ErrorPage = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-red-600 dark:bg-red-600 px-6">
      <h1 className="text-9xl font-extrabold text-white mb-4">404
      </h1>
      <p className="text-xl text-white font-semibold mb-6">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition duration-300 font-semibold"
      >
        Back to Home
      </Link>
    </section>
  );
};

export default ErrorPage;
