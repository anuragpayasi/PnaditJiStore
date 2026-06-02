import React, { useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { TbMenu2, TbMenu3 } from "react-icons/tb";
import { Link } from 'react-router';

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <header className='fixed top-0 left-0 right-0 z-50 '>

            <nav className='
                flex items-center justify-between
                px-5 sm:px-10
                py-4
                bg-white/70 backdrop-blur-xl
                shadow-md
                border-b border-gray-200
            '>

                {/* Logo */}
                <div>
                    <Link to="/"> <h1 className='text-xl sm:text-2xl font-bold'>
                        Sharma's <span className='text-amber-600'>Store</span>
                    </h1> </Link>
                </div>

                {/* Desktop Menu */}
                <ul className='hidden lg:flex gap-8 text-base font-medium'>
                    <li><Link to="/">Home</Link></li>

                    <li><Link to="/about">About</Link></li>

                    <li><Link to="/category">Category</Link></li>

                    <li>   <Link to="/products">Products</Link></li>

                    <li><Link to="/feedback">Feedback</Link></li>

                    <li><Link to="/contact">Contact</Link></li>
                </ul>

                {/* Right Side */}
                <div className='flex items-center gap-3 sm:gap-5'>

                    {/* Search */}
                    <div className='hidden sm:flex items-center border rounded-xl px-3 py-1 bg-white'>
                        <input
                            type="text"
                            placeholder='Search products...'
                            className='outline-none text-sm w-40 lg:w-60'
                        />
                        <IoSearch className='text-xl text-gray-600' />
                    </div>

                    {/* Icons */}
                    <FaHeart className='text-xl cursor-pointer hover:text-amber-600 transition hidden sm:block' />
                    <HiMiniShoppingBag className='text-2xl cursor-pointer hover:text-amber-600 transition hidden sm:block' />

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setShowMenu(!showMenu)}
                        className='text-3xl lg:hidden'
                    >
                        {showMenu ? <TbMenu3 /> : <TbMenu2 />}
                    </button>

                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`
                lg:hidden
                fixed top-16 left-0 right-0
                bg-white/90 backdrop-blur-xl
                shadow-lg
                transition-all duration-300
                ${showMenu ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"}
            `}>

                <ul className='flex flex-col gap-5 p-6 text-base font-medium'>

                   <li><Link to="/">Home</Link></li>

                    <li><Link to="/about">About</Link></li>

                    <li><Link to="/category">Category</Link></li>

                    <li>   <Link to="/products">Products</Link></li>

                    <li><Link to="/feedback">Feedback</Link></li>

                    <li><Link to="/contact">Contact</Link></li>

                    {/* Mobile Search */}
                    <li className='flex items-center border rounded-xl px-3 py-2 bg-gray-50'>
                        <input
                            type="text"
                            placeholder='Search...'
                            className='outline-none text-sm w-full bg-transparent'
                        />
                        <IoSearch className='text-xl text-gray-600' />
                    </li>

                </ul>
            </div>

        </header>
    )
}

export default Navbar