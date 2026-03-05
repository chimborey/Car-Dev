import React from 'react'
import A1 from '../assets/a1.jpg'
const AboutUs = () => {
  return (
    <section className='w-full overflow-hidden py-14'>
      <main className='mt-12 container'>
        {/* about-center */}
        <div className='flex justify-center items-center mx-auto' data-aos='zoom-in' data-aos-delay='500'>
          <h3 className="font-group">about us</h3>
        </div>
        {/* about-grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-7'>
          {/* hero-left-img */}
          <div data-aos='fade-up' data-aos-delay='700'>
            <div className='hero'>
              <img src={A1} alt="" className='w-full h-96 md:w-[390px] md:h-[390px] lg:w-[490px] lg:h-[490px] cursor-not-allowed hover:scale-95 duration-300 transition-all rounded-lg' />
            </div>
          </div>
          {/* hero-right-text */}
          <div className='flex flex-col justify-center items-start space-y-4'>
            <h3 className="font-group" data-aos='fade-up' data-aos-delay='300'>our version</h3>
            <p className="span-group" data-aos='fade-up' data-aos-delay='600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus animi repellendus mollitia facilis, maxime tenetur deleniti quod, cumque beatae, quae dicta assumenda sit perspiciatis corporis esse excepturi ipsa nesciunt?</p>
            <p className='font-desc' data-aos='fade-up' data-aos-delay='900'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi reprehenderit facilis eos est inventore ipsa omnis ea.</p>
            <p className='font-desc' data-aos='fade-up' data-aos-delay='1200'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci illum quaerat saepe iusto voluptates. Eum itaque nemo fugiat omnis repudiandae ratione dicta cupiditate architecto ex dolorum, veritatis exercitationem possimus quos iusto quam totam placeat qui repellat ullam expedita dolorem, consequatur esse. Magni quaerat quidem recusandae dolorem! Eveniet, illo incidunt?</p>
          </div>
        </div>
      </main>
    </section>
  )
}

export default AboutUs