import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import F1 from '../assets/f1.webp'
import F2 from '../assets/f2.jpg'
import F3 from '../assets/f3.webp'
import F4 from '../assets/f4.jpg'
import F5 from '../assets/f5.jpg'
import F6 from '../assets/f6.webp'
import F7 from '../assets/f7.jpg'
const FeatureUs = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 5000,
    autoplaySpeed:0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover:true,
    pauseOnFocus: false,
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
          slidesToScroll: 2,
          initialSlide: 2
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
        breakpoint: 348,
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
        <div className='flex flex-col space-y-5'>
          {/* feature-center */}
          <div className='flex justify-center items-center space-y-2 flex-col' data-aos='fade-up' data-aos-delay='300'>
            <h3 className="font-group" data-aos='fade-up' data-aos-delay='600'>featured <span className='text-yellow-600 text-xl'>cars</span></h3>
            <p className="font-desc" data-aos='fade-up' data-aos-delay='900'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, fugit ipsum nobis perferendis amet corporis ullam dolore omnis unde! Recusandae, ipsa alias atque dolores sit laborum harum eum earum.</p>
          </div>
          {/* feature-slick*/}
          <Slider {...settings}>

            <div data-aos='fade-up' data-aos-delay='900'>
              <div className='w-full overflow-hidden rounded-lg bg-slate-300 border-2 border-black shadow flex flex-col justify-center items-center hover:scale-95 cursor-not-allowed duration-300 transition-all'>
                <img src={F1} alt="" className='w-full h-48 rounded-lg hover:scale-95 duration-300 transition-all cursor-pointer' />
                <h3 className='font-group-group mt-4 mx-auto flex justify-center items-center text-center'>toyota corolla cross</h3>
                <h5 className="price-group text-center mb-9 mt-2">$47,900 to $49,900</h5>
              </div>
            </div>

            <div data-aos='fade-up' data-aos-delay='1200'>
              <div className='w-full overflow-hidden rounded-lg bg-slate-300 border-2 border-black shadow hover:scale-95 cursor-not-allowed duration-300 transition-all'>
                <img src={F2} alt="" className='w-full h-48 rounded-lg hover:scale-95 duration-300 transition-all cursor-pointer' />
                <h3 className='font-group-group mt-4 mx-auto flex justify-center items-center text-center'>toyota yaris cross</h3>
                <h5 className="price-group text-center mb-9 mt-2">$37,500 to 43,500</h5>
              </div>
            </div>

            <div data-aos='fade-up' data-aos-delay='1500'>
              <div className='w-full overflow-hidden rounded-lg bg-slate-300 border-2 border-black shadow hover:scale-95 cursor-not-allowed duration-300 transition-all'>
                <img src={F3} alt="" className='w-full h-48 rounded-lg hover:scale-95 duration-300 transition-all cursor-pointer' />
                <h3 className='font-group-group mt-4 mx-auto flex justify-center items-center text-center'>toyota yaris cross</h3>
                <h5 className="price-group text-center mb-9 mt-2">$37,500 to 43,500</h5>
              </div>
            </div>

            <div data-aos='fade-up' data-aos-delay='1800'>
              <div className='w-full overflow-hidden rounded-lg bg-slate-300 border-2 border-black shadow hover:scale-95 cursor-not-allowed duration-300 transition-all'>
                <img src={F4} alt="" className='w-full h-48 rounded-lg hover:scale-95 duration-300 transition-all cursor-pointer' />
                <h3 className='font-group-group mt-4 mx-auto flex justify-center items-center text-center'>toyota yaris cross</h3>
                <h5 className="price-group text-center mb-9 mt-2">$37,500 to 43,500</h5>
              </div>
            </div>

            <div data-aos='fade-up' data-aos-delay='2100'>
              <div className='w-full overflow-hidden rounded-lg bg-slate-300 border-2 border-black shadow hover:scale-95 cursor-not-allowed duration-300 transition-all'>
                <img src={F5} alt="" className='w-full h-48 rounded-lg hover:scale-95 duration-300 transition-all cursor-pointer' />
                <h3 className='font-group-group mt-4 mx-auto flex justify-center items-center text-center'>toyota yaris cross</h3>
                <h5 className="price-group text-center mb-9 mt-2">$37,500 to 43,500</h5>
              </div>
            </div>

            <div data-aos='fade-up' data-aos-delay='2400'>
              <div className='w-full overflow-hidden rounded-lg bg-slate-300 border-2 border-black shadow hover:scale-95 cursor-not-allowed duration-300 transition-all'>
                <img src={F6} alt="" className='w-full h-48 rounded-lg hover:scale-95 duration-300 transition-all cursor-pointer' />
                <h3 className='font-group-group mt-4 mx-auto flex justify-center items-center text-center'>toyota yaris cross</h3>
                <h5 className="price-group text-center mb-9 mt-2">$37,500 to 43,500</h5>
              </div>
            </div>

            <div data-aos='fade-up' data-aos-delay='2700'>
              <div className='w-full overflow-hidden rounded-lg bg-slate-300 border-2 border-black shadow hover:scale-95 cursor-not-allowed duration-300 transition-all'>
                <img src={F7} alt="" className='w-full h-48 rounded-lg hover:scale-95 duration-300 transition-all cursor-pointer' />
                <h3 className='font-group-group mt-4 mx-auto flex justify-center items-center text-center'>toyota yaris cross</h3>
                <h5 className="price-group text-center mb-9 mt-2">$37,500 to 43,500</h5>
              </div>
            </div>

          </Slider>
        </div>
      </main>
    </section>
  )
}

export default FeatureUs