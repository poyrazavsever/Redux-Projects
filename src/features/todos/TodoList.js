import React from 'react'
import { selectAllTodos } from './todoSlice'
import { useSelector } from 'react-redux'
import TimeAgo from './TimeAgo'

function TodoList() {

    const todos = useSelector(selectAllTodos)

    const renderedTodos = todos.map(todo => (
        <li key={todo.id} className='even:bg-zinc-100 flex flex-col items-start gap-2'>

            <h3 className='text-lg font-bold tracking-wider'>{todo.title}</h3>
            <p className='text-sm font-medium tracking-wider'>{todo.content}</p>

            <span className='text-sm font-semibold tracking-wider'>
                <TimeAgo timestamp={todo.date}/>
            </span>

        </li>
    ))
    
  return (
    <div>
        <h2 className='text-4xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-900 to-pink-300'>Your Todos</h2>
        <ul>{renderedTodos}</ul>
    </div>
  )
}

export default TodoList