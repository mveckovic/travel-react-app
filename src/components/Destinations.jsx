import React from 'react'

import Hvar from '../assets/Hvar.png';
import Plitvice from '../assets/Plitvice.jpg';
import Pula from '../assets/Pula.jpg';
import Zadar from '../assets/Zadar.png';
import Zagreb from '../assets/Zagreb.png';

const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>All-Inclusive Resorts</h1>
        <p className='py-4'>In the beautiful country of Croatia</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={Hvar} alt="/" />
            <img className='w-full h-full object-cover' src={Plitvice} alt="/" />
            <img className='w-full h-full object-cover' src={Pula} alt="/" />
            <img className='w-full h-full object-cover' src={Zadar} alt="/" />
            <img className='w-full h-full object-cover' src={Zagreb} alt="/" />
        </div>
    </div>
  )
} 

export default Destinations;