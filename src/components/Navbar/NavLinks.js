import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-4 font-extrabold text-gray-400 hover:text-black" smooth to="/#about">
                Home
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-400 hover:text-black" smooth to="/services">
                Services
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-400 hover:text-black" smooth to="/team">
                Our Team
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-400 hover:text-black" smooth to="/products">
                Products
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-400 hover:text-black" to="/contact">
                Contact Us
            </HashLink>
            {/* <HashLink className="px-4 font-extrabold text-gray-400 hover:text-black" to="/nexus-academy">
                Nexus Academy
            </HashLink> */}
            <Link className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/contact">
                GET IN TOUCH
            </Link>
        </>
    )
}

export default NavLinks;