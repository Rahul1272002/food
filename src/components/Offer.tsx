import React from 'react'
import Image from 'next/image'
import CountDown from './CountDown'
export default function Offer() {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      <div className='p-6 flex-1 flex flex-col justify-center items-center text-center gap-8'>
          <h1 className='text-white text-5xl font-bold xl:text-6xl' >Delicious Burger & French Fry</h1>
          <p className='text-white xl:text-xl'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos ipsa magnam quisquam quae illum exercitationem in minus culpa iste nesciunt?</p>
          <CountDown/>
          <button className='bg-red-500 text-white py-3 px-6 rounded'>Order Now</button>
      </div>

      <div className='relative w-full flex-1 md:h-full'>
        <Image src="/offerProduct.png" alt="" fill className='object-contain'/>
      </div>
    </div>
  )
}
