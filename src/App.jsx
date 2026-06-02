import React from 'react'
import Home from './Components/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Products from './Components/Products/Products'
import AboutUs from './Components/About us/AboutUs'
import ShopByCategory from './Components/Products/ShopByCategory'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import ContactUs from './Components/ContatcUs/ContactUs'
import TestimonialSection from './Components/TestimonialSection/TestimonialSection'


const App = () => {
  return (
    <>
      <Navbar />


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/category' element={<ShopByCategory />} />
        <Route path='/feedback' element={<TestimonialSection />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/footer' element={<Footer />} />
      </Routes>


      <Footer />
    </>

  )
}

export default App