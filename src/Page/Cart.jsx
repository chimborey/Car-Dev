import React, { useContext } from 'react'
import { FaTrash } from "react-icons/fa6";
import { ShopContext } from '../Components/ShopContext';
import CartItems from '../Components/CartItems';
import { CiShoppingTag } from "react-icons/ci";
const Cart = () => {
  const { cart, total, quantity, clearCart } = useContext(ShopContext)
  return (
    <section className='w-full overflow-hidden py-14'>
      <main className='mt-12 container'>
        {/* cart-grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {/* cart-left */}
          <div className='flex-col flex space-y-5' data-aos='zoom-in' data-aos-delay='300'>
            {/* left01 */}
            <div className='flex justify-between items-center border-b border-blue-300 py-2'>
              <h3 className="font-group" data-aos='zoom-in' data-aos-delay='600'>shopping cart</h3>
              <h5 className="span-group" data-aos='zoom-in' data-aos-delay='900'>items: {quantity}</h5>
              <FaTrash size={25} className='text-red-500 cursor-not-allowed font-bold' onClick={clearCart} data-aos='zoom-in' data-aos-delay='1200'/>
            </div>
            {/* left02 */}
            <div className='flex justify-between items-center border-b border-blue-300 py-2'>
              <h5 className="span-group" data-aos='zoom-in' data-aos-delay='1500'>proudcts</h5>
              <h5 className="span-group" data-aos='zoom-in' data-aos-delay='1800'>quantity</h5>
              <h5 className="span-group" data-aos='zoom-in' data-aos-delay='2100'>price</h5>
              <h5 className="span-group" data-aos='zoom-in' data-aos-delay='2400'>total</h5>
            </div>
            {/* left03 */}
            <div data-aos='zoom-in' data-aos-delay='2800'>
              {
                cart.length > 0 ? 
                (
                  cart.map((items)=> <CartItems key={items} items={items}/>)
                )
                : 
                (
                  <div className='flex flex-col justify-center items-center'>
                    <h3 className="font-group">order cart</h3>
                    <CiShoppingTag size={37} className='text-slate-200'/>
                  </div>
                )
              }
            </div>
          </div>
          {/* cart-right */}
          <div data-aos='zoom-in' data-aos-delay='300'>
            <div className='w-full h-96 flex-col flex bg-slate-500 px-3 py-3 rounded-lg shadow cursor-wait'>
              {/*right01 */}
              <div className='flex justify-between items-center border-b border-blue-300 py-2' data-aos='zoom-in' data-aos-delay='600'>
                <h5 className="span-group">cart summary</h5>
                <h5 className="span-group">cars dev</h5>
              </div>
              {/* right02 */}
              <div className='flex justify-between items-center border-b border-blue-300 py-2' data-aos='zoom-in' data-aos-delay='900'>
                <h5 className="span-group">items:</h5>
                <h5 className="price-group">{quantity}</h5>
              </div>
              {/* right03 */}
              <div className='flex justify-between items-center border-b border-blue-300 py-2' data-aos='zoom-in' data-aos-delay='1200'>
                <h5 className="span-group">subtotal:</h5>
                <h5 className="price-group">${isNaN(total) ? 0 : total}</h5>
              </div>
              {/* right04 */}
              <div className='flex justify-between items-center border-b border-blue-300 py-2' data-aos='zoom-in' data-aos-delay='1500'>
                <h5 className="span-group">delivery:</h5>
                <h5 className="price-group">free order</h5>
              </div>
              {/* right05 */}
              <div className='flex justify-between items-center border-b border-blue-300 py-2' data-aos='zoom-in' data-aos-delay='1800'>
                <h5 className="span-group">total:</h5>
                <h5 className="price-group">${isNaN(total) ? 0 : total}</h5>
              </div>
              <div data-aos='zoom-in' data-aos-delay='2100'>
                <button className='btn mt-4 mx-auto'>checkout</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Cart