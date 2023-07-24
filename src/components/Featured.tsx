import React from 'react'
import Image from 'next/image'
import { featuredProducts } from '@/data'
export default function Featured() {
  return (
    <div className='w-screen overflow-x-scroll text-red-500'>
      <div className='w-max flex '>
        {featuredProducts.map((item)=>(

        <div key={item.id} className='w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]'>
          <div className='relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500 '>
            { item.img &&
            <Image src={item.img} alt="w" fill className=' object-contain '/>
             }
          </div>

          <div className='flex-1 flex flex-col gap-4 items-center text-center justify-center'>
            <h1 className='text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl'>
                {item.title}
            </h1>
            { item.desc &&
            <p className='p-4 2xl:p-8'>{item.desc}</p>
            }
            <span className='text-xl font-bold'>{`$ ${item.price}`}</span>
            <button className='bg-red-500 text-white p-2 rounded-md'>Add to cart</button>
          </div>

        </div>
         ))}
      </div>
    </div>
  )
}
