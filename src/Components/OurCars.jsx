import React, { useContext, useState } from 'react'
import { ShopContext } from './ShopContext'
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
const OurCars = () => {
  // search product
  const { products, addToCart } = useContext(ShopContext)
  const [search, setSearch] = useState("")
  const searchProducts = products.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <section className='w-full overflow-hidden py-14'>
      <main className='mt-12 container'>
        {/*  */}
        <div className='flex justify-between items-center' data-aos='fade-up' data-aos-delay='600'>
          <h3 className='font-group'>products</h3>
          <input type="text" value={search} placeholder='search...' onChange={(e) => setSearch(e.target.value)} className='w-56 sm:w-72 md:w-96 p-2 border-none outline-none bg-slate-400 rounded-full shadow' />
        </div>
        {/*  */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-7'>
          {
            searchProducts.map((products) => {
              const { id, img, name, price } = products
              return (
                <div data-aos='fade-up' data-aos-delay='900'>
                  <div key={id} className='w-full flex-col flex overflow-hidden rounded-lg shadow cursor-pointer'>
                    <Link to={`/product/${products.id}`}>
                      <img src={img} alt="" className='w-full h-48 hover:scale-110 duration-300 transition-all' />
                    </Link>
                    <div className='flex flex-col space-y-3 mt-3 mb-7 px-4'>
                      <h3 className='span-group text-center'>{name}</h3>
                      <div className='flex items-center justify-between '>
                        <h5 className='price-group'>${price}</h5>
                        <FaCartArrowDown className='text-2xl w-12 h-12 rounded-full py-3 px-3 text-white bg-black hover:bg-red-500 shadow' onClick={() => addToCart(products, id)} />
                      </div>
                      <div>

                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </main>
    </section>
  )
}

export default OurCars