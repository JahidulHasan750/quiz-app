import React from 'react'
import { Set } from '../App'
const Menu = () => {
    const{setState}= Set()
  return (
    <div className='w-full h-screen flex  pt-6 justify-center '>
        <div className=' w-80 h-96 bg-[#8adc4f] flex items-center justify-center shadow-xl rounded-lg '>
        <button className='bg-blue-500 shadow-lg rounded-md px-4 py-2 hover:bg-blue-700 text-xl font-semibold' onClick={()=>{setState('quiz')}}>Start the quiz!!!!</button>
    </div>
    </div>
  )
}

export default Menu