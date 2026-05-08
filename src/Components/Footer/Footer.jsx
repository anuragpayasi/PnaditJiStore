import React from 'react'
import { FaInstagram, FaFacebook, FaWhatsapp, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='w-full bg-linear-to-l from-amber-600 to-amber-950 text-white pt-14 pb-6 px-4 sm:px-8 lg:px-14'>

            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>

                {/* Brand */}
                <div>
                    <h2 className='text-2xl font-bold text-amber-500'>
                        Sharma's Store
                    </h2>

                    <p className='mt-4 text-sm leading-7 text-gray-300'>
                        Your trusted store for pooja samagri, festival essentials and daily kirana items.
                        We believe in purity, quality and customer trust.
                    </p>

                    <div className='flex gap-4 mt-5 text-xl text-gray-300'>
                        <FaInstagram className='hover:text-amber-500 cursor-pointer transition' />
                        <FaFacebook className='hover:text-amber-500 cursor-pointer transition' />
                        <FaWhatsapp className='hover:text-amber-500 cursor-pointer transition' />
                        <FaTwitter className='hover:text-amber-500 cursor-pointer transition' />
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className='text-lg font-semibold text-white mb-4'>
                        Quick Links
                    </h3>

                    <ul className='space-y-3 text-sm text-gray-300'>
                        <li className='hover:text-amber-500 cursor-pointer'>Home</li>
                        <li className='hover:text-amber-500 cursor-pointer'>Products</li>
                        <li className='hover:text-amber-500 cursor-pointer'>Categories</li>
                        <li className='hover:text-amber-500 cursor-pointer'>About Us</li>
                        <li className='hover:text-amber-500 cursor-pointer'>Contact</li>
                    </ul>
                </div>

                {/* Categories */}
                <div>
                    <h3 className='text-lg font-semibold text-white mb-4'>
                        Categories
                    </h3>

                    <ul className='space-y-3 text-sm text-gray-300'>
                        <li>Pooja Essentials</li>
                        <li>Idols & Murtis</li>
                        <li>Festival Items</li>
                        <li>Daily Kirana</li>
                        <li>Home Decor</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className='text-lg font-semibold text-white mb-4'>
                        Contact Us
                    </h3>

                    <ul className='space-y-3 text-sm text-gray-300'>
                        <li>📍 Main Market, Madhya Pradesh</li>
                        <li>📞 +91 98765 43210</li>
                        <li>📧 sharmastore@gmail.com</li>
                    </ul>

                    <button className='mt-6 w-full bg-gradient-to-r from-amber-600 to-orange-600 py-3 rounded-xl font-semibold hover:scale-105 transition'>
                        Order on WhatsApp
                    </button>
                </div>

            </div>

            {/* Bottom */}
            <div className='border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400'>
                © {new Date().getFullYear()} Sharma's Store. All rights reserved.
            </div>

        </footer>
    )
}

export default Footer