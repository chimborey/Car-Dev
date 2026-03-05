import React, { useContext } from 'react'
import { ShopContext } from './ShopContext'
import { FaTrash } from "react-icons/fa6";
const CartItems = ({ items }) => {
  const { inCreaseQuantity, deCreaseQuantity, removeFormCart } = useContext(ShopContext)
  return (
    <section className='flex flex-col space-y-5'>
      <div className='flex items-center justify-between gap-3'>
        <img src={items.img} alt="" className='w-16 h-16 shadow rounded-lg mt-3 cursor-pointer' />
        <div className='flex flex-col'>
          <h3 className='span-group'>{items.name}</h3>
          <FaTrash className='text-2xl text-red-500 cursor-not-allowed' onClick={() => removeFormCart(items.id)} />
        </div>
        <div className='flex items-center justify-between'>
          <button className='text-3xl text-red-500' onClick={() => deCreaseQuantity(items.id)}>-</button>
          <button className='text-3xl text-red-500'>{items.amount}</button>
          <button className='text-3xl text-red-500' onClick={() => inCreaseQuantity(items.id)}>+</button>
        </div>
        <div className='flex items-center justify-between'>
          <h5 className='price-group'>{items.price}</h5>
        </div>
        <div className='flex items-center justify-between'>
          <h5 className='span-group'>${parseFloat(items.price * items.amount).toFixed(2)}</h5>
        </div>
      </div>
    </section>
  )
}

export default CartItems