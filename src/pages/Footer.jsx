import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-center items-center space-x-4">
        <a href="#" className="text-gray-400 hover:text-white">
          <FaFacebook className="text-xl" />
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <FaTwitter className="text-xl" />
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <FaInstagram className="text-xl" />
        </a>
      </div>
      <p className="text-center text-gray-400 mt-2">
        &copy; {new Date().getFullYear()} User Management. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
