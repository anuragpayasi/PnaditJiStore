import React from 'react'
import products from '../Data/Category Data/Products'
import { FiArrowRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const Products = () => {
    return (
        <section id='Products' className='w-full bg-gradient-to-b from-gray-300 to-amber-200 py-10 px-3 sm:px-6 lg:px-10'>

            {/* Heading */}
            <div className='mb-10 text-center'>

                <p className='text-xs sm:text-sm font-medium uppercase tracking-[3px] text-amber-700'>
                    Premium Collection
                </p>

                <h2 className='mt-2 text-2xl sm:text-4xl font-bold text-gray-900'>
                    Explore Our Products
                </h2>

                <p className='mx-auto mt-3 max-w-2xl text-sm sm:text-base leading-7 text-gray-600'>
                    Discover trusted pooja essentials and daily-use products
                    for every home and every celebration.
                </p>
            </div>

            {/* Product Grid */}
            <div
                className='
                                grid grid-cols-1
                                sm:grid-cols-2
                                lg:grid-cols-3
                                xl:grid-cols-4
                                gap-5
                              '
            >

                {products.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className='
                                group overflow-hidden
                                rounded-2xl
                                bg-white
                                shadow-md
                                transition-all duration-300
                                hover:-translate-y-1
                                hover:shadow-2xl
                            '
                        >

                            {/* Image */}
                            <div className='relative overflow-hidden bg-gray-100'>

                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className='
                                        h-[220px] sm:h-[260px]
                                        w-full object-cover
                                        transition-transform duration-500
                                        group-hover:scale-105
                                    '
                                />

                                {/* Badge */}
                                <span
                                    className='
                                        absolute left-2 top-2
                                        rounded-full
                                        bg-amber-700
                                        px-2.5 py-1
                                        text-[9px] sm:text-[10px]
                                        font-medium text-white
                                        shadow-md
                                    '
                                >
                                    {item.badge}
                                </span>
                            </div>

                            {/* Content */}
                            <div className='p-3 sm:p-4'>

                                {/* Category */}
                                <p
                                    className='
                                        text-[10px] sm:text-xs
                                        uppercase tracking-[2px]
                                        text-gray-500
                                    '
                                >
                                    {item.category}
                                </p>

                                {/* Title */}
                                <h2
                                    className='
                                        mt-1
                                        text-sm sm:text-lg
                                        font-semibold
                                        leading-5 sm:leading-7
                                        text-gray-900
                                        transition-colors duration-300
                                        group-hover:text-amber-700
                                        line-clamp-2
                                    '
                                >
                                    {item.title}
                                </h2>

                                {/* Rating */}
                                <div className='mt-2 flex items-center gap-1'>

                                    <div className='flex items-center gap-[2px] text-amber-500'>
                                        <FaStar className='text-[10px] sm:text-xs' />
                                        <FaStar className='text-[10px] sm:text-xs' />
                                        <FaStar className='text-[10px] sm:text-xs' />
                                        <FaStar className='text-[10px] sm:text-xs' />
                                        <FaStar className='text-[10px] sm:text-xs' />
                                    </div>

                                    <span className='text-[10px] sm:text-xs text-gray-500'>
                                        (4.8)
                                    </span>
                                </div>

                                {/* Description */}
                                <p
                                    className='
                                        mt-2 hidden sm:block
                                        text-sm leading-6
                                        text-gray-600
                                        line-clamp-2
                                    '
                                >
                                    {item.description}
                                </p>

                                {/* Price */}
                                <div className='mt-3 flex items-center gap-2'>

                                    <span className='text-lg sm:text-2xl font-bold text-gray-900'>
                                        ₹{item.priceNow}
                                    </span>

                                    <span className='text-xs sm:text-sm text-gray-400 line-through'>
                                        ₹{item.priceBefore}
                                    </span>
                                </div>

                                {/* Button */}
                               <div className='flex gap-5'>
                                 <button
                                    className='
                                        mt-4 flex w-full items-center
                                        justify-center gap-2
                                        rounded-xl
                                        bg-gradient-to-r
                                        from-amber-700 to-amber-400
                                        px-3 py-2.5
                                        text-xs sm:text-sm
                                        font-medium text-white
                                        shadow-md
                                        transition-all duration-300
                                        hover:scale-[1.02]
                                        hover:shadow-lg
                                    '
                                >
                                    Buy Now
                                    <FiArrowRight className='text-sm' />
                                </button>
                                <button
                                    className='
                                        mt-4 flex w-full items-center
                                        justify-center gap-2
                                        rounded-xl
                                        bg-gradient-to-r
                                        from-amber-400 to-amber-700
                                        px-3 py-2.5
                                        text-xs sm:text-sm
                                        font-medium text-white
                                        shadow-md
                                        transition-all duration-300
                                        hover:scale-[1.02]
                                        hover:shadow-lg
                                    '
                                >
                                    Add to cart
                                    <FiArrowRight className='text-sm' />
                                </button>
                               </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Products