"use client"
import React from 'react'
import Countdown from 'react-countdown'

const endDate=new Date("2023-07-24")
export default function CountDown() {
  return (
    <div>
      <Countdown date={endDate} className='font-bold text-5xl text-yellow-300'/>
    </div>
  )
}
