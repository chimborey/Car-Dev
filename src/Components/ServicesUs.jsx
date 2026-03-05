import React from 'react'
import { GrSettingsOption } from "react-icons/gr";
import { FaUserFriends } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
const ServicesUs = () => {
  return (
    <section className='w-full overflow-hidden py-14'>
      <main className='mt-12 container'>
        {/* services-center */}
        <div className="flex flex-col justify-center items-center space-y-3">
          <h3 className="font-group" data-aos='fade-up' data-aos-delay='300'>why choose <span className='text-xl text-yellow-400'>wheeledeal</span>?</h3>
          <p className="font-desc" data-aos='fade-up' data-aos-delay='600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum numquam nobis ipsum nam.</p>
        </div>
        {/* services-grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-9'>
          {/* grid01 */}
          <div data-aos='fade-up' data-aos-delay='900'>
            <div className='w-full overflow-hidden flex flex-col px-4 py-4 rounded-lg bg-slate-500 cursor-wait shadow'>
              <GrSettingsOption size={35} className='text-green-400 mx-auto'/>
              <h3 className='font-group'>financing options</h3>
              <p className="font-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium quis aspernatur voluptate quo optio sunt ipsum eveniet iste excepturi nobis laboriosam accusamus porro earum ex voluptatem ut sint eum, recusandae nisi. Nam, necessitatibus praesentium, fugiat voluptate voluptatibus optio quidem rem voluptates magnam non doloremque illo pariatur. Voluptate!</p>
            </div>
          </div>
          {/* grid02 */}
          <div data-aos='fade-up' data-aos-delay='1200'>
            <div className='w-full overflow-hidden flex flex-col px-4 py-4 rounded-lg bg-slate-500 cursor-wait shadow'>
              <FaUserFriends size={35} className='text-green-400 mx-auto'/>
              <h3 className='font-group'>satisfied customers</h3>
              <p className="font-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium quis aspernatur voluptate quo optio sunt ipsum eveniet iste excepturi nobis laboriosam accusamus porro earum ex voluptatem ut sint eum, recusandae nisi. Nam, necessitatibus praesentium, fugiat voluptate voluptatibus optio quidem rem voluptates magnam non doloremque illo pariatur. Voluptate!</p>
            </div>
          </div>
          {/* grid03 */}
          <div data-aos='fade-up' data-aos-delay='1500'>
            <div className='w-full overflow-hidden flex flex-col px-4 py-4 rounded-lg bg-slate-500 cursor-wait shadow'>
              <CiDeliveryTruck size={35} className='text-green-400 mx-auto'/>
              <h3 className='font-group'>fast & easy booking</h3>
              <p className="font-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium quis aspernatur voluptate quo optio sunt ipsum eveniet iste excepturi nobis laboriosam accusamus porro earum ex voluptatem ut sint eum, recusandae nisi. Nam, necessitatibus praesentium, fugiat voluptate voluptatibus optio quidem rem voluptates magnam non doloremque illo pariatur. Voluptate!</p>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default ServicesUs