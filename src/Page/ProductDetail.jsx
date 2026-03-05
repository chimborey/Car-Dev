import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { productData } from '../data'
import { ShopContext } from '../Components/ShopContext'

const ProductDetail = () => {
  const {addToCart} = useContext(ShopContext)
  const { id } = useParams()
  const product = productData.find((product) => product.id === parseInt(id))
  return (
    <section className='w-full overflow-hidden py-14'>
      <main className='container mt-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div  data-aos='fade-up' data-aos-delay='600'>
            <img src={product.img} alt="" className='w-full h-96 md:w-[390px] md:h-[390px] lg:w-[490px] lg:h-[490px] cursor-not-allowed hover:scale-95 duration-300 transition-all rounded-lg' />
          </div>
          <div className='flex flex-col justify-center items-start space-y-4'>
            <h3 className="span-group" data-aos='fade-up' data-aos-delay='300'>{product.name}</h3>
            <p className="font-desc" data-aos='fade-up' data-aos-delay='600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus veritatis cumque perferendis ipsam magni perspiciatis nostrum illo impedit sapiente voluptatem enim tempora aliquid, error iure doloribus unde magnam. Tempore accusantium provident ab odio eius? Quam perferendis, adipisci veniam nisi culpa qui id ut sint expedita et doloribus nulla dolor.</p>
            <p className="font-desc" data-aos='fade-up' data-aos-delay='900'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus veritatis cumque perferendis ipsam magni perspiciatis nostrum illo impedit sapiente voluptatem enim tempora aliquid, error iure doloribus unde magnam. Tempore accusantium provident ab odio eius? Quam perferendis, adipisci veniam nisi culpa qui id ut sint expedita et doloribus nulla dolor.</p>
            <div className='flex justify-between items-center space-x-7' data-aos='fade-up' data-aos-delay='1200'>
              <h5 className="price-group">${product.price}</h5>
              <button className='btn' onClick={()=> addToCart(product, id)}>order now</button>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default ProductDetail