import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import S1 from '../assets/s1.jpg'
import S2 from '../assets/s2.jpg'
import S3 from '../assets/s3.jpg'
import S4 from '../assets/s4.jpg'
import S5 from '../assets/s5.jpg'
import S6 from '../assets/s6.jpg'
import S7 from '../assets/s7.jpg'
import S8 from '../assets/s8.jpg'
import S9 from '../assets/s9.jpg'
import S10 from '../assets/s10.jpg'
import S11 from '../assets/s11.jpeg'
import S12 from '../assets/s12.jpg'

const SupportUs = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 345,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section className='w-full overflow-hidden py-14'>
      <main className='mt-12 container'>
        <Slider {...settings}>
          <div data-aos='fade-up' data-aos-delay='900'>
            <div className='w-full overflow-hidden bg-white shadow px-3 py-3 rounded-lg hover:-translate-y-3 duration-300 transition-all cursor-pointer flex flex-col items-center justify-center'>
              <h3 className="font-group">push</h3>
              <p className="font-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga esse possimus vitae rerum, obcaecati nemo, corporis nesciunt dolores explicabo aliquam neque voluptatum et fugiat doloribus deserunt! Nisi temporibus doloribus cum impedit incidunt. Nostrum, earum? Dignissimos sed fugiat totam aliquid eius dolorum magnam asperiores consequuntur, libero ex alias delectus. Dolores.</p>
              <img src={S1} alt="" className='w-16 h-16 rounded-full hover:scale-95 duration-300 transition-all cursor-wait shadow' />
            </div>
          </div>

          <div data-aos='fade-up' data-aos-delay='900'>
            <div className='w-full overflow-hidden bg-white shadow px-3 py-3 rounded-lg hover:-translate-y-3 duration-300 transition-all cursor-pointer flex flex-col items-center justify-center'>
              <h3 className="font-group">deo</h3>
              <p className="font-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga esse possimus vitae rerum, obcaecati nemo, corporis nesciunt dolores explicabo aliquam neque voluptatum et fugiat doloribus deserunt! Nisi temporibus doloribus cum impedit incidunt. Nostrum, earum? Dignissimos sed fugiat totam aliquid eius dolorum magnam asperiores consequuntur, libero ex alias delectus. Dolores.</p>
              <img src={S2} alt="" className='w-16 h-16 rounded-full hover:scale-95 duration-300 transition-all cursor-wait shadow' />
            </div>
          </div>

          <div data-aos='fade-up' data-aos-delay='900'>
            <div className='w-full overflow-hidden bg-white shadow px-3 py-3 rounded-lg hover:-translate-y-3 duration-300 transition-all cursor-pointer flex flex-col items-center justify-center'>
              <h3 className="font-group">dai</h3>
              <p className="font-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga esse possimus vitae rerum, obcaecati nemo, corporis nesciunt dolores explicabo aliquam neque voluptatum et fugiat doloribus deserunt! Nisi temporibus doloribus cum impedit incidunt. Nostrum, earum? Dignissimos sed fugiat totam aliquid eius dolorum magnam asperiores consequuntur, libero ex alias delectus. Dolores.</p>
              <img src={S3} alt="" className='w-16 h-16 rounded-full hover:scale-95 duration-300 transition-all cursor-wait shadow' />
            </div>
          </div>

          <div data-aos='fade-up' data-aos-delay='900'>
            <div className='w-full overflow-hidden bg-white shadow px-3 py-3 rounded-lg hover:-translate-y-3 duration-300 transition-all cursor-pointer flex flex-col items-center justify-center'>
              <h3 className="font-group">nike</h3>
              <p className="font-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga esse possimus vitae rerum, obcaecati nemo, corporis nesciunt dolores explicabo aliquam neque voluptatum et fugiat doloribus deserunt! Nisi temporibus doloribus cum impedit incidunt. Nostrum, earum? Dignissimos sed fugiat totam aliquid eius dolorum magnam asperiores consequuntur, libero ex alias delectus. Dolores.</p>
              <img src={S4} alt="" className='w-16 h-16 rounded-full hover:scale-95 duration-300 transition-all cursor-wait shadow' />
            </div>
          </div>

          <div data-aos='fade-up' data-aos-delay='900'>
            <div className='w-full overflow-hidden bg-white shadow px-3 py-3 rounded-lg hover:-translate-y-3 duration-300 transition-all cursor-pointer flex flex-col items-center justify-center'>
              <h3 className="font-group">jash</h3>
              <p className="font-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga esse possimus vitae rerum, obcaecati nemo, corporis nesciunt dolores explicabo aliquam neque voluptatum et fugiat doloribus deserunt! Nisi temporibus doloribus cum impedit incidunt. Nostrum, earum? Dignissimos sed fugiat totam aliquid eius dolorum magnam asperiores consequuntur, libero ex alias delectus. Dolores.</p>
              <img src={S5} alt="" className='w-16 h-16 rounded-full hover:scale-95 duration-300 transition-all cursor-wait shadow' />
            </div>
          </div>

          <div data-aos='fade-up' data-aos-delay='900'>
            <div className='w-full overflow-hidden bg-white shadow px-3 py-3 rounded-lg hover:-translate-y-3 duration-300 transition-all cursor-pointer flex flex-col items-center justify-center'>
              <h3 className="font-group">nush</h3>
              <p className="font-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga esse possimus vitae rerum, obcaecati nemo, corporis nesciunt dolores explicabo aliquam neque voluptatum et fugiat doloribus deserunt! Nisi temporibus doloribus cum impedit incidunt. Nostrum, earum? Dignissimos sed fugiat totam aliquid eius dolorum magnam asperiores consequuntur, libero ex alias delectus. Dolores.</p>
              <img src={S6} alt="" className='w-16 h-16 rounded-full hover:scale-95 duration-300 transition-all cursor-wait shadow' />
            </div>
          </div>

          <div data-aos='fade-up' data-aos-delay='900'>
            <div className='w-full overflow-hidden bg-white shadow px-3 py-3 rounded-lg hover:-translate-y-3 duration-300 transition-all cursor-pointer flex flex-col items-center justify-center'>
              <h3 className="font-group">bath</h3>
              <p className="font-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga esse possimus vitae rerum, obcaecati nemo, corporis nesciunt dolores explicabo aliquam neque voluptatum et fugiat doloribus deserunt! Nisi temporibus doloribus cum impedit incidunt. Nostrum, earum? Dignissimos sed fugiat totam aliquid eius dolorum magnam asperiores consequuntur, libero ex alias delectus. Dolores.</p>
              <img src={S7} alt="" className='w-16 h-16 rounded-full hover:scale-95 duration-300 transition-all cursor-wait shadow' />
            </div>
          </div>

          <div data-aos='fade-up' data-aos-delay='900'>
            <div className='w-full overflow-hidden bg-white shadow px-3 py-3 rounded-lg hover:-translate-y-3 duration-300 transition-all cursor-pointer flex flex-col items-center justify-center'>
              <h3 className="font-group">rose</h3>
              <p className="font-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga esse possimus vitae rerum, obcaecati nemo, corporis nesciunt dolores explicabo aliquam neque voluptatum et fugiat doloribus deserunt! Nisi temporibus doloribus cum impedit incidunt. Nostrum, earum? Dignissimos sed fugiat totam aliquid eius dolorum magnam asperiores consequuntur, libero ex alias delectus. Dolores.</p>
              <img src={S8} alt="" className='w-16 h-16 rounded-full hover:scale-95 duration-300 transition-all cursor-wait shadow' />
            </div>
          </div>

          <div data-aos='fade-up' data-aos-delay='900'>
            <div className='w-full overflow-hidden bg-white shadow px-3 py-3 rounded-lg hover:-translate-y-3 duration-300 transition-all cursor-pointer flex flex-col items-center justify-center'>
              <h3 className="font-group">john</h3>
              <p className="font-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga esse possimus vitae rerum, obcaecati nemo, corporis nesciunt dolores explicabo aliquam neque voluptatum et fugiat doloribus deserunt! Nisi temporibus doloribus cum impedit incidunt. Nostrum, earum? Dignissimos sed fugiat totam aliquid eius dolorum magnam asperiores consequuntur, libero ex alias delectus. Dolores.</p>
              <img src={S9} alt="" className='w-16 h-16 rounded-full hover:scale-95 duration-300 transition-all cursor-wait shadow' />
            </div>
          </div>

          <div data-aos='fade-up' data-aos-delay='900'>
            <div className='w-full overflow-hidden bg-white shadow px-3 py-3 rounded-lg hover:-translate-y-3 duration-300 transition-all cursor-pointer flex flex-col items-center justify-center'>
              <h3 className="font-group">dam</h3>
              <p className="font-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga esse possimus vitae rerum, obcaecati nemo, corporis nesciunt dolores explicabo aliquam neque voluptatum et fugiat doloribus deserunt! Nisi temporibus doloribus cum impedit incidunt. Nostrum, earum? Dignissimos sed fugiat totam aliquid eius dolorum magnam asperiores consequuntur, libero ex alias delectus. Dolores.</p>
              <img src={S10} alt="" className='w-16 h-16 rounded-full hover:scale-95 duration-300 transition-all cursor-wait shadow' />
            </div>
          </div>

          <div data-aos='fade-up' data-aos-delay='900'>
            <div className='w-full overflow-hidden bg-white shadow px-3 py-3 rounded-lg hover:-translate-y-3 duration-300 transition-all cursor-pointer flex flex-col items-center justify-center'>
              <h3 className="font-group">rash</h3>
              <p className="font-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga esse possimus vitae rerum, obcaecati nemo, corporis nesciunt dolores explicabo aliquam neque voluptatum et fugiat doloribus deserunt! Nisi temporibus doloribus cum impedit incidunt. Nostrum, earum? Dignissimos sed fugiat totam aliquid eius dolorum magnam asperiores consequuntur, libero ex alias delectus. Dolores.</p>
              <img src={S11} alt="" className='w-16 h-16 rounded-full hover:scale-95 duration-300 transition-all cursor-wait shadow' />
            </div>
          </div>

          <div data-aos='fade-up' data-aos-delay='900'>
            <div className='w-full overflow-hidden bg-white shadow px-3 py-3 rounded-lg hover:-translate-y-3 duration-300 transition-all cursor-pointer flex flex-col items-center justify-center'>
              <h3 className="font-group">josh</h3>
              <p className="font-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga esse possimus vitae rerum, obcaecati nemo, corporis nesciunt dolores explicabo aliquam neque voluptatum et fugiat doloribus deserunt! Nisi temporibus doloribus cum impedit incidunt. Nostrum, earum? Dignissimos sed fugiat totam aliquid eius dolorum magnam asperiores consequuntur, libero ex alias delectus. Dolores.</p>
              <img src={S12} alt="" className='w-16 h-16 rounded-full hover:scale-95 duration-300 transition-all cursor-wait shadow' />
            </div>
          </div>
        </Slider>
      </main>
    </section>
  )
}

export default SupportUs