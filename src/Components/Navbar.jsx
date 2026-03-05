import React, { useContext, useEffect, useState } from 'react'
import { CiMenuFries } from "react-icons/ci";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { LiaCarSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';
import { FaShoppingBag } from 'react-icons/fa';
import { ShopContext } from './ShopContext';
const Navbar = () => {
  // cart
  const {cart} = useContext(ShopContext)
  // scrolled
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  // activenav
  const [activeNav, setActiveNav] = useState('home')
  // click menu
  const [openClick, setOpenClick] = useState(false)
  return (
    <section className={` w-full top-0 left-0 fixed z-50 shadow-md shadow-gray-500 backdrop-blur-3xl ${scrolled ? '' : 'bg-slate-700'}`}>
      <nav className='flex justify-between items-center h-14 container' data-aos='fade-down' data-aos-delay='600'>
        {/* logo */}
        <div className='flex justify-between items-center gap-2'>
          <LiaCarSolid size={25} className='text-orange-400' />
          <Link to={'/'} className='font-title'>car dev</Link>
        </div>
        {/* menu */}
        <div className='py-14 hidden md:block'>
          <div className="flex justify-between items-center gap-7">
            <Link to={'/'} className='font-text' onClick={() => setActiveNav('home')}>{activeNav === 'home' ? <hr /> : <></>}home</Link>
            <Link to={'/about'} className='font-text' onClick={() => setActiveNav('about')}>{activeNav === 'about' ? <hr /> : <></>}about</Link>
            <Link to={'/product'} className='font-text' onClick={() => setActiveNav('cars')}>{activeNav === 'cars' ? <hr /> : <></>}cars</Link>
            <Link to={'/services'} className='font-text' onClick={() => setActiveNav('services')}>{activeNav === 'services' ? <hr /> : <></>}services</Link>
            <Link to={'/support'} className='font-text' onClick={() => setActiveNav('support')}>{activeNav === 'support' ? <hr /> : <></>}support</Link>
          </div>
        </div>
        {/* click btn */}
        <div className='flex justify-between items-center gap-3'>
          {/* shopping */}
          <Link to={'/cart'} className='relative'>
            <FaShoppingBag className='text-2xl px-2 py-2 text-white w-9 h-9 rounded-full hover:bg-red-500 duration-300 transition-all' />
            <span className='text-xl text-yellow-500 absolute -top-2 -right-0'>{cart.length}</span>
          </Link>
          {/* btn */}
          <button className='btn'>sign in</button>
          {/* click menu */}
          <button className='md:hidden sm:block'>
            {
              openClick ?
                <MdOutlineCloseFullscreen size={18} className='text-white hover:opacity-75' onClick={() => setOpenClick(!openClick)} />
                :
                <CiMenuFries size={18} className='text-white hover:opacity-75' onClick={() => setOpenClick(!openClick)} />
            }
          </button>
        </div>
      </nav>
      {/* click menu */}
      <div className= {`  w-full md:hidden absolute top-14 py-14 transition-all duration-300 shadow-md shadow-gray-500 backdrop-blur-3xl bg-slate-700 ${ openClick ? 'left-0' : '-left-[2000px]' }`}>
        <div className="flex flex-col justify-center items-center space-y-4">
          <Link to={'/'} className='font-text' onClick={() => setActiveNav('home')}>{activeNav === 'home' ? <hr /> : <></>}home</Link>
          <Link to={'/about'} className='font-text' onClick={() => setActiveNav('about')}>{activeNav === 'about' ? <hr /> : <></>}about</Link>
          <Link to={'/product'} className='font-text' onClick={() => setActiveNav('cars')}>{activeNav === 'cars' ? <hr /> : <></>}cars</Link>
          <Link to={'/services'} className='font-text' onClick={() => setActiveNav('services')}>{activeNav === 'services' ? <hr /> : <></>}services</Link>
          <Link to={'/support'} className='font-text' onClick={() => setActiveNav('support')}>{activeNav === 'support' ? <hr /> : <></>}support</Link>
        </div>
      </div>
    </section>
  )
}

export default Navbar