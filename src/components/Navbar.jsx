import React, { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="flex flex-wrap items-center justify-between px-4 sm:px-8 py-4 bg-white shadow-md border-b border-amber-100 sticky top-0 z-50">
            <div className="flex items-center">
                <img src="/logo/logo.svg" alt="Logo" className="h-10 sm:h-15" />
            </div>
            
            {/* Mobile menu button */}
            <div className="block lg:hidden">
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="flex items-center px-3 py-2 border rounded text-amber-700 border-amber-700 hover:text-amber-800 hover:border-amber-800"
                >
                    <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            
            {/* Desktop menu */}
            <div className={`w-full flex-grow justify-center lg:flex lg:items-center lg:w-auto ${isMenuOpen ? 'block' : 'hidden'} lg:block mt-4 lg:mt-0`}>
                <ul className="flex flex-col justify-center lg:flex-row lg:space-x-8 space-y-2 lg:space-y-0">
                    <li><a href="#home" className="block text-amber-800 hover:text-amber-700 font-medium transition duration-200">Home</a></li>
                    <li><a href="#about" className="block text-gray-800 hover:text-amber-700 font-medium transition duration-200">About</a></li>
                    <li><a href="#members" className="block text-gray-800 hover:text-amber-700 font-medium transition duration-200">Our Members</a></li>
                    <li><a href="https://www.youtube.com/@Profssionals_Musical_Society/videos" target="_blank" rel="noopener noreferrer" className="block text-gray-800 hover:text-amber-700 font-medium transition duration-200">Youtube</a></li>
                </ul>
            </div>
            
            {/* Button */}
            <div className={`w-full lg:w-auto ${isMenuOpen ? 'block' : 'hidden'} lg:block mt-4 lg:mt-0`}>
                <a href="#youtube">
                <button 
                className="w-full lg:w-auto bg-amber-700 hover:bg-amber-800 text-white font-medium py-2 px-6 rounded-md shadow-sm transition duration-200">
                    Explore
                </button>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;