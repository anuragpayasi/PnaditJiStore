import React from 'react'
import Navbar from '../Navbar/Navbar'
import HeroSection from '../Hero/HeroSection'
import ShopByCategory from '../Products/ShopByCategory'
import AboutUs from '../About us/AboutUs'
import Products from '../Products/Products'
import ContactUs from '../ContatcUs/ContactUs'
import TestimonialSection from '../TestimonialSection/TestimonialSection'
import Footer from '../Footer/Footer'

const Home = () => {
    return (
        <>
            <div className=''>
                <Navbar />
                <HeroSection />
                <ShopByCategory/>
                <Products/>
                <AboutUs/>
                <TestimonialSection/>
                <ContactUs/>
                <Footer/>

            </div>
        </>
    )
}

export default Home