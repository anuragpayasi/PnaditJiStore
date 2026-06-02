import React from 'react'
import Heading from '../Heading/Heading'
import data from '../Data/Category Data/CategoryData'
import { FiArrowRight } from "react-icons/fi";

const ProductSection1 = () => {
  return (
    <section id='Category' className='relative w-full overflow-hidden bg-gradient-to-b from-amber-200 to-gray-300 py-16 px-4 sm:px-8 lg:px-14 pt-35'>

      {/* Background Blur */}
      <div className='absolute top-0 left-0 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl'></div>
      <div className='absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl'></div>

      <div className='relative z-10 mx-auto max-w-7xl'>

        {/* Heading */}
        <div className='mb-12 flex flex-col items-center text-center'>

          <Heading first="Shop" second="by Category" />

          <p className='mt-4 max-w-2xl text-sm sm:text-base leading-7 text-gray-600'>
            Discover premium pooja essentials, festive collections and daily
            kirana products carefully selected for every home and every occasion.
          </p>
        </div>

        {/* Cards */}
        <div
          className='
            grid gap-7
            sm:grid-cols-2
            xl:grid-cols-3
          '
        >

          {data.map((item, index) => {
            return (
              <div
                key={index}
                className='
                  group relative overflow-hidden
                  rounded-[28px]
                  border border-white/40
                  bg-white/70
                  backdrop-blur-lg
                  shadow-md
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:shadow-2xl
                '
              >

                {/* Product Image */}
                <div className='relative overflow-hidden'>

                  <div className='absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-transparent to-transparent'></div>

                  <img
                    src={item.image}
                    alt={item.title}
                    className='
                      h-[220px] w-full object-cover
                      transition-transform duration-700
                      group-hover:scale-110
                    '
                  />

                  {/* Badge */}
                  <span
                    className='
                      absolute left-4 top-4 z-20
                      rounded-full
                      bg-amber-900/90
                      px-4 py-1.5
                      text-[11px]
                      font-medium tracking-wide
                      text-white
                      shadow-lg
                    '
                  >
                    {item.badge}
                  </span>

                  {/* Floating Category */}
                  <div
                    className='
                      absolute bottom-4 left-4 z-20
                      rounded-full
                      bg-white/90
                      px-3 py-1
                      text-[11px]
                      font-semibold uppercase tracking-[2px]
                      text-amber-900
                      backdrop-blur-md
                    '
                  >
                    {item.category}
                  </div>
                </div>

                {/* Content */}
                <div className='p-5'>

                  {/* Product Title */}
                  <h2
                    className='
                      text-xl font-semibold
                      text-gray-900
                      transition-colors duration-300
                      group-hover:text-amber-700
                    '
                  >
                    {item.title}
                  </h2>

                  {/* Description */}
                  <p className='mt-3 text-sm leading-7 text-gray-600'>
                    {item.description}
                  </p>

                  {/* Bottom */}
                  <div className='mt-6 flex items-center justify-between'>



                    {/* Button */}
                    <button
                      className='
                        flex items-center gap-2
                        rounded-2xl
                        bg-gradient-to-r
                        from-amber-600 to-orange-600
                        px-5 py-3
                        text-sm font-medium
                        text-white
                        shadow-lg
                        transition-all duration-300
                        hover:scale-105
                        hover:shadow-xl
                      '
                    >
                      Explore More
                      <FiArrowRight className='text-base' />
                    </button>

                  </div>
                </div>

                {/* Hover Border */}
                <div
                  className='
                    absolute inset-0 rounded-[28px]
                    border border-transparent
                    transition-all duration-500
                    group-hover:border-amber-400/50
                  '
                ></div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default ProductSection1