import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import WhyChooseUs from './component/WhyChooseUs'
import Testimonial from './component/Testimonial'
import FAQ from './component/FAQ'
import Footer from "./component/Footer"
import Book from './component/Book'
import Contact from './component/Contact'


const App = () => {
  
 

  return (
    <div>
      
      <Navbar/>  
      <Home />
      
      <Book/>
      <About />
      <WhyChooseUs />
      <Testimonial />
      <FAQ />
      <Contact/>
      <Footer />
      
      
    </div>
  )
}

export default App
