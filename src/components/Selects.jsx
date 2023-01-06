import React from 'react'

import Hvar from '../assets/Hvar.png';
import Plitvice from '../assets/Plitvice.jpg';
import Pula from '../assets/Pula.jpg';
import Zadar from '../assets/Zadar.png';
import Zagreb from '../assets/Zagreb.png';
import Zagorje from '../assets/Zagorje.png';
import SelectsCard from './SelectsCard';

const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>

    <SelectsCard bg={Hvar} text='Hvar' />
    <SelectsCard bg={Plitvice} text='Plitvice' />
    <SelectsCard bg={Pula} text='Pula' />
    <SelectsCard bg={Zadar} text='Zadar' />
    <SelectsCard bg={Zagreb} text='Zagreb' />
    <SelectsCard bg={Zagorje} text='Zagorje' />
    
        
    </div>
  )
}

export default Selects