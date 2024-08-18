import React from 'react'
import TimeAgo from './TimeAgo'
import StatusButton from './StatusButton'
import CategoryButton from './CategoryButton'

function Todo({todo}) {
    
  return (
    <button className='even:bg-neutral-100 flex flex-col items-start gap-2 py-3 px-4 border rounded-sm w-96'>

        <h3 className='text-lg font-bold tracking-wider py-2 px-3 bg-pink-100'>{todo.title}</h3>
        <p className='text-sm font-medium tracking-wider'>{todo.content}</p>

        <span className='text-sm font-semibold tracking-wider'>
                <TimeAgo timestamp={todo.date}/>
        </span>

        <div className='flex items-center gap-4'>
            <StatusButton todo={todo}/>
            <CategoryButton todo={todo}/>
        </div>

     </button>
  )
}

export default Todo