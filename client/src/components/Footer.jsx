import React from 'react'
import { FaMeta } from "react-icons/fa6";
import { FaInstagram  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="bg-white text-gray-800 p-6">
            <div className="max-w-7xl mx-auto px-4">
                {/* Navigation Links */}
                <div className="flex flex-wrap justify-center text-center mb-4">
                    <a href="/" className="mx-2 sm:mx-4 hover:text-gray-600">Home</a>
                    <a href="#about" className="mx-2 sm:mx-4 hover:text-gray-600">About</a>
                    <a href="#projects" className="mx-2 sm:mx-4 hover:text-gray-600">Projects</a>
                    <a href="#tech" className="mx-2 sm:mx-4 hover:text-gray-600">Technology</a>
                    <a href="#contact" className="mx-2 sm:mx-4 hover:text-gray-600">Contact</a>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center text-center mb-4">
                    {/* Replace with actual SVG or font icons */}
                    <a href="#" className="mx-2 sm:mx-4 hover:text-gray-600"><FaMeta /></a>
                    <a href="#" className="mx-2 sm:mx-4 hover:text-gray-600"><FaInstagram /></a>
                    <a href="#" className="mx-2 sm:mx-4 hover:text-gray-600"><FaXTwitter /></a>
                    <a href="#" className="mx-2 sm:mx-4 hover:text-gray-600"><FaYoutube /></a>
                    <a href="#" className="mx-2 sm:mx-4 hover:text-gray-600"><FaMedium /></a>
                </div>
                {/* Copyright Notice */}
                <div className="text-center text-gray-400 text-sm mt-4">
                    © 2024 Ruben Ocasio. All rights reserved.
                </div>
            </div>
        </footer>

    )
}

export default Footer