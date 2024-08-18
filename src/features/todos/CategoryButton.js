import React from 'react'
import { categoryAdded } from './todoSlice'
import { useDispatch } from 'react-redux'

function CategoryButton({todo}) {

    const dispatch = useDispatch()

    const statusType = {
        "work" : "💼 For Work",
        "fun" : "😜 For Fun",
        "personel" : "🎩 Personel",
    }

    const CategoryButton = Object.entries(statusType).map(([name, type]) => {
        return (
            <option 
            value={type}
            key={name}
            onClick={() => {
                dispatch(categoryAdded({todoId: todo.id, status: name}))
            }}
            >

                {type} {todo.status[name]}

            </option>
        )
    })

  return (
    <div>
        <select className='shadow py-2'>
            {CategoryButton}
        </select>
    </div>
  )
}

export default CategoryButton