import React from 'react'
import { statusAdded } from './todoSlice'
import { useDispatch } from 'react-redux'

function StatusButton({todo}) {

    const dispatch = useDispatch()

    const statusType = {
        "important" : "🔴 Important",
        "norush" : "🟠 No Rush",
        "unnecessary" : "🟡 Unnecessary",
    }

    const statusButton = Object.entries(statusType).map(([name, type]) => {
        return (
            <option 
            value={type}
            key={name}
            onClick={() => {
                dispatch(statusAdded({todoId: todo.id, status: name}))
            }}
            >

                {type} {todo.status[name]}

            </option>
        )
    })

  return (
    <div>
        <select className='shadow py-2'>
            {statusButton}
        </select>
    </div>
  )
}

export default StatusButton