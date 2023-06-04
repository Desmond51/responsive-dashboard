import data  from '..data/data.js'
import React from 'react'
import {FaShoppingBag} from 'react-icons/fa' 
const RecentOrders = () => {
  return (
    <div className='w-full col-span-1 relative lg:h-[70vh] m-auto p-4 border rounded-lg bg-white overflow-scroll'>
      <h1>RecentOrders</h1>
      <ul>
        {data.map((order, id) => (
          <li key={id} className = 'bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'>
               <div>
                <FaShoppingBag className='bg-purple-800' />
               </div>

          </li>
        ))}
      </ul>
    </div>
  )
}

export default RecentOrders