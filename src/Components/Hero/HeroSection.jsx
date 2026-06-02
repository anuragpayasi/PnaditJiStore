import React from 'react'
import Button from '../Buttons/Button'
// import animateed from "../../assets/animatediya5.mp4"
import { TbStars } from "react-icons/tb";

const HeroSection = () => {
    return (
        <section id='Home' className='relative flex flex-col lg:flex-row min-h-screen w-full overflow-hidden bg-gradient-to-b from-gray-300 to-amber-200 sm:pt-0 pb-8 '>

            {/* Background Blur */}
            <div className='absolute top-0 left-0 h-72 w-72 rounded-full bg-amber-300/30 blur-3xl'></div>
            <div className='absolute bottom-0 right-0 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl'></div>

            {/* hero left */}
            <div className='relative z-10 flex-1 sm:px-10 px-6 sm:pt-32 pt-32 flex flex-col justify-center'>

                {/* Badge */}
                <p className='bg-amber-900 text-white font-medium py-2 w-fit rounded-full px-4 flex items-center gap-x-2 text-xs sm:text-sm shadow-md'>
                    <TbStars className='text-base' />
                    Trusted Quality Products
                </p>

                {/* Heading */}
                <h1 className='pt-5 max-w-3xl text-4xl sm:text-5xl lg:text-6xl 2xl:text-6xl font-bold sm:leading-18 leading-13 text-gray-900'>
                    Where <span className='text-amber-800'>Tradition</span> Meets Everyday Needs.
                </h1>

                {/* Description */}
                <p className='sm:text-base text-sm pt-5 max-w-2xl leading-7 text-gray-700'>
                    From everyday groceries to festival preparations — Sharma's Store
                    brings together quality pooja items and daily kirana under one roof,
                    making every visit simple, reliable and worth your trust.
                </p>

                {/* Buttons */}
                <div className='pt-8 flex flex-wrap gap-4'>
                    <Button buttonName={'Explore More'} />
                    <Button buttonName={'Contact Us'} />
                </div>

                {/* Stats */}
                <div className='pt-10 flex flex-wrap gap-8'>

                    <div>
                        <h3 className='text-2xl font-bold text-amber-800'>
                            10+
                        </h3>
                        <p className='text-sm text-gray-600'>
                            Years of Trust
                        </p>
                    </div>

                    <div>
                        <h3 className='text-2xl font-bold text-amber-800'>
                            500+
                        </h3>
                        <p className='text-sm text-gray-600'>
                            Happy Families
                        </p>
                    </div>

                    <div>
                        <h3 className='text-2xl font-bold text-amber-800'>
                            1000+
                        </h3>
                        <p className='text-sm text-gray-600'>
                            Products Available
                        </p>
                    </div>

                </div>
            </div>

            {/* hero right */}
            <div className='relative z-10 flex-1 md:px-5 px-6 pt-15 lg:pt-40 flex justify-center items-center'>

                <div
                    className='
                        flex justify-center items-center
                        rounded-[2rem]
                        bg-white/40
                        backdrop-blur-md
                        shadow-lg
                        p-8
                        w-full max-w-[520px]
                    '
                >
                    <img
                        src='https://www.satvikstore.in/cdn/shop/products/Handmade_Lord_Ganesha_Shadow_Diya_1024x1024.jpg?v=1746442515'
                        autoPlay
                        loop
                        muted
                        playsInline
                        className='
                            w-full object-contain
                            h-[240px]
                            sm:h-[300px]
                            md:h-[380px]
                            lg:h-[430px]
                            
                        '
                    />
                </div>

            </div>

        </section>
    )
}

export default HeroSection