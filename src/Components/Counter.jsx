import React from 'react'
import { useState } from 'react';
import { RiResetLeftFill } from "react-icons/ri";

const Counter = () => {

    const [count, setCount] = useState(0);



    const handleIncrement=()=>{
        setCount(count+1)
    }
    const handleDecrement=()=>{
        setCount(count-1)
    }
    const handleReset=()=>{
        setCount(0)
    }

  return (
    <>
    <div className='flex justify-center items-center flex-col h-96 w-96 bg-emerald-50 rounded-2xl gap-25'>

        <h1 className='font-bold text-3xl'>Counter App</h1>
        <div>
            <span className='text-5xl font-bold'>{count}</span>
        </div>

        <div className='flex gap-5 '>
            <button className='w-20 h-10 bg-green-500 rounded text-center flex justify-center items-center text-white font-bold text-2xl cursor-pointer hover:scale-105 active:scale-100' onClick={()=>handleIncrement()}>+</button>
            <button className='w-20 h-10 bg-red-500 rounded text-center flex justify-center items-center text-white font-bold text-2xl cursor-pointer hover:scale-105 active:scale-100' onClick={()=>handleDecrement()}>-</button>
            <button className='w-20 h-10 bg-yellow-500 rounded text-center flex justify-center items-center text-white font-bold text-2xl cursor-pointer hover:scale-105 active:scale-100' onClick={()=>handleReset()}><RiResetLeftFill />
</button>
            
        </div>
    </div>
    </>
  )
}

export default Counter