import React from 'react'
import TimeAgo from './TimeAgo'

function Todo({todo}) {
  return (
    <li className='even:bg-neutral-100 flex flex-col items-start gap-2 py-3 px-4 border rounded-sm w-96'>

        <h3 className='text-lg font-bold tracking-wider py-2 px-3 bg-pink-100'>{todo.title}</h3>
        <p className='text-sm font-medium tracking-wider'>{todo.content}</p>

        <span className='text-sm font-semibold tracking-wider'>
                <TimeAgo timestamp={todo.date}/>
        </span>

     </li>
  )
}

export default Todo