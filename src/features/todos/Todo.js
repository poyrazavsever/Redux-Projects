import React from 'react'
import TimeAgo from './TimeAgo'

function Todo({todo}) {
  return (
    <li className='even:bg-zinc-100 flex flex-col items-start gap-2'>

        <h3 className='text-lg font-bold tracking-wider'>{todo.title}</h3>
        <p className='text-sm font-medium tracking-wider'>{todo.content}</p>

        <span className='text-sm font-semibold tracking-wider'>
                <TimeAgo timestamp={todo.date}/>
        </span>

     </li>
  )
}

export default Todo