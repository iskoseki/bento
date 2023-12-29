import React from "react";

const ErrorPage = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-black">
    <h1 className="text-6xl font-bold text-white mb-8">Error 404 🧐</h1>
    <p className="text-2xl text-white mb-8">Page not found</p>
    <a
      href="/"
      className="bg-white text-black px-4 py-2 rounded-3xl hover:bg-orange-500 hover:outline hover:text-white transition-all duration-500 "
    >
      Back to Home
    </a>
  </div>
);

export default ErrorPage;
