import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './counterSlice'

const Counter = () => {
    
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const buttonStyle = "p-12 text-3xl bg-zinc-100 shadow-2xl hover:bg-zinc-300 transition-all"

  return (
    <section className='h-screen flex flex-col items-center justify-center gap-8'>
        <p className='text-5xl tracking-wider font-sans'>{count}</p>
        <div className='flex items-center justify-center gap-4'>
            <button onClick={() => dispatch(decrement())} className={buttonStyle}>-</button>
            <button onClick={() => dispatch(increment())} className={buttonStyle}>+</button>
        </div>
    </section>
  )
}

export default Counter