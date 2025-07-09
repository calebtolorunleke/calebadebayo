import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-900 text-white px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">404</h1>
      <p className="text-lg md:text-2xl mb-6">Oops! Page not found.</p>
      <Link
        to="/"
        className="px-6 py-2 text-sm md:text-base bg-blue-600 hover:bg-blue-700 transition rounded-full font-medium"
      >
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
