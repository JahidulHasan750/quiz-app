import React from 'react'
import { Set } from '../App'
import { Questions } from '../question/Question'

const Final = () => {
    const{setState, score, setScore}= Set()
    const restart=()=>{
        setState('menu')
        setScore(0)
    }
    return (
        <div className='w-full h-screen flex  pt-6 justify-center '>
        <div className=' w-80 h-96 bg-[#8adc4f] flex items-center justify-center shadow-xl rounded-lg   flex-col gap-4'>
            <p className='bg-blue-500 shadow-lg rounded-md px-4 py-2 hover:bg-blue-700 text-xl font-semibold'>Score: {score}/{Questions.length}</p>
        <button className='bg-blue-500 shadow-lg rounded-md px-4 py-2 hover:bg-blue-700 text-xl font-semibold' onClick={restart}>Restart the quiz!!!!</button>
    </div>
    </div>

    )
}

export default Final