import React, { useEffect } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Home from './Page/Home'
import Services from './Page/Services'
import Car from './Page/Car'
import About from './Page/About'
import ProductDetail from './Page/ProductDetail'
import Cart from './Page/Cart'
import Header from './Page/Header'
import Footer from './Page/Footer'
import Support from './Page/Support'
import { ToastContainer } from 'react-toastify'
const App = () => {
      useEffect(()=>{
            AOS.init({
                  duration: 1000,
                  offset: 100,
                  once: false
            })
      }, [])
  return (
    <BrowserRouter>
    <ToastContainer />
    <Header />
    <Routes>
      <Route path='/' element ={<Home />}></Route>
      <Route path='/about' element ={<About />}></Route>
      <Route path='/product' element ={<Car />}></Route>
      <Route path='/product/:id' element ={<ProductDetail />}></Route>
      <Route path='/cart' element ={<Cart />}></Route>
      <Route path='/services' element ={<Services />}></Route>
      <Route path='/support' element ={<Support />}></Route>
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App