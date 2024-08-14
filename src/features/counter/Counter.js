import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { 
    increment, 
    decrement, 
    reset, 
    incrementByAmount, } from './counterSlice'

const Counter = () => {
    
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmount] = useState(0);

    const addValue = Number(incrementAmount) || 0;

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }

    const buttonStyle = "p-12 text-3xl bg-zinc-100 shadow-2xl hover:bg-zinc-300 transition-all"
    const buttonStyleBt = "p-12 text-lg bg-zinc-100 shadow-2xl hover:bg-zinc-300 transition-all"

  return (
    <section className='flex flex-col items-center justify-center gap-8 mt-24'>

        <p className='text-5xl tracking-wider font-sans'>{count}</p>

        <div className='flex items-center justify-center gap-4'>
            <button onClick={() => dispatch(decrement())} className={buttonStyle}>-</button>
            <button onClick={() => dispatch(increment())} className={buttonStyle}>+</button>
        </div>

        <input 
            type="text"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)} 
            placeholder='amount value'
            className='py-3 px-2 bg-zinc-200 shadow-xl placeholder:text-zinc-400 focus:outline-none'
        />

        <div className='flex items-center justify-center gap-4'>
            <button className={buttonStyleBt} onClick={() => dispatch(incrementByAmount(addValue))}> Add Amount </button>
            <button className={buttonStyleBt} onClick={() => dispatch(resetAll)}> Reset </button>
        </div>

    </section>
  )
}

export default Counter