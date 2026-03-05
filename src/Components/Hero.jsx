import React from 'react'
import H1 from '../assets/h1.png'
import {Link} from 'react-router-dom'
const Hero = () => {
  return (
    <section className='w-full overflow-hidden bg-black py-14'>
      <main className='mt-12 container'>
        {/* hero */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* hero-left-text */}
          <div className='flex flex-col justify-center items-start space-y-4'>
            <h3 className="hero-group" data-aos='fade-up' data-aos-delay='300'>find your perfect <br /> ride today</h3>
            <span className='span-group' data-aos='fade-up' data-aos-delay='600'>over 1000+ new cars available here</span>
            <p className='font-desc' data-aos='fade-up' data-aos-delay='900'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci illum quaerat saepe iusto voluptates. Eum itaque nemo fugiat omnis repudiandae ratione dicta cupiditate architecto ex dolorum, veritatis exercitationem possimus quos iusto quam totam placeat qui repellat ullam expedita dolorem, consequatur esse. Magni quaerat quidem recusandae dolorem! Eveniet, illo incidunt?</p>
            <div className='flex justify-between items-center space-x-6' data-aos='fade-up' data-aos-delay='1200'>
              <Link to={'about'} className='btns'>explore</Link>
              <Link to={'/product'} className='btn'>see cars</Link>
            </div>
          </div>
          {/* hero-right-img */}
          <div data-aos='fade-up' data-aos-delay='700'>
            <div className='hero'>
              <img src={H1} alt="" className='w-full h-96 md:w-[490px] md:h-[490px] lg:w-[590px] lg:h-[590px] cursor-not-allowed hover:scale-95 duration-300 transition-all rounded-lg' />
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Hero