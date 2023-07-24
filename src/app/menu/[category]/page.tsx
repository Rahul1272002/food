import { pizzas } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CategoryPage() {
  return (
    <div className='flex text-red-500 flex-wrap'>
       {pizzas.map((item)=>(
        <Link  href={`/product/${item.id}`} className='w-full h-[60vh] lg:w-1/3 sm:w-1/2 border-r-2 border-b-2 border-red-500 p-4 flex flex-col justify-between group odd:bg-fuchsia-50' key={item.id}>
        {
          item.img && (<div className='relative h-[80%]'>
          <Image src={item.img} alt="" fill className='object-contain' /> 
          </div>)
        }
        <div className='flex items-center justify-between font-bold'>
          <h1 className='text-2xl uppercase p-2'>{item.title}</h1>
          <h2 className='group-hover:hidden text-xl'>${item.price}</h2>
          <button className='hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md'>Add to Cart</button>
        </div>
        </Link>
       ))}
    </div>
  )
}
 