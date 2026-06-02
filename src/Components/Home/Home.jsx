import React from 'react'
import HeroSection from '../Hero/HeroSection'
import ShopByCategory from '../Products/ShopByCategory'
import ContactUs from '../ContatcUs/ContactUs'
import TestimonialSection from '../TestimonialSection/TestimonialSection'


const Home = () => {
    return (
        <>
            <div className=''>
                <HeroSection />
                <ShopByCategory/>
                <TestimonialSection/>
                <ContactUs/>
            </div>
        </>
    )
}

export default Home