import React from "react";
import { FaUsers } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-teal-500 h-screen text-white h-60vh flex justify-center items-center">
      <div className="text-center">
        <FaUsers className="text-6xl mb-4" />
        <h1 className="text-4xl font-semibold mb-2">Welcome to User Management</h1>
        <p className="text-lg">Manage your users with ease and efficiency.</p>
      </div>
    </section>
  );
};

export default Banner;
