import React from 'react'

const TopCards = () => {
  return (
    <div className='grid lg:grid-cols-5 gap-4 p-4'>

        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'> $7,843</p>
                <p className='text-gray-600'>Daily Revenue</p>
            </div>
            <p className='bg-green-200 flex justify-between items-center p-2 rounded-lg'>
                <span className='text-green-700 text-lg'>+18%</span>
            </p>
        </div>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'> $7289,843</p>
                <p className='text-gray-600'>YTD Revenue</p>
            </div>
            <p className='bg-green-200 flex justify-between items-center p-2 rounded-lg'>
                <span className='text-green-700 text-lg'>+12%</span>
            </p>
        </div>
        <div className=' bg-white flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'> $56,843</p>
                <p className='text-gray-600'>Customers</p>
            </div>
            <p className='bg-green-200 flex justify-between items-center p-2 rounded-lg'>
                <span className='text-green-700 text-lg'>+13%</span>
            </p>
        </div>
    </div>
  )
}

export default TopCards