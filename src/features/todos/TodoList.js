import React from 'react'
import { selectAllTodos } from './todoSlice'
import { useSelector } from 'react-redux'
import Todo from './Todo'

function TodoList() {

    const todos = useSelector(selectAllTodos)

    const orderedTodos = todos.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderedTodos = orderedTodos.map(todo => (
        <Todo key={todo.id} todo={todo}/>
    ))
    
  return (
    <div className='flex items-start justify-center mt-24 animate-card'>
        <div className='flex flex-col items-start gap-8'>
            <h2 className='text-4xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-900 to-pink-300'>Your Todos</h2>
            <ul className='flex flex-col items-start gap-4 w-full'>{renderedTodos}</ul>
        </div>
    </div>
  )
}

export default TodoList