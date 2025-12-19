import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="mt-4 text-xl text-gray-600">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      <Link
        href="/"
        className="mt-6 inline-flex items-center justify-center rounded-lg bg-black px-6 py-3 text-white text-sm font-medium hover:bg-gray-800 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
