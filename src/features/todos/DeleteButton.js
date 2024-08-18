import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todoDeleted } from './todoSlice'
import toast from 'react-hot-toast';

// Icon
import { FaRegTrashAlt } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { MdOutlineCancel } from "react-icons/md";

const DeleteButton = ({todo}) => {

    const dispatch = useDispatch()

    const todoId = todo.id
    const [onClick, setOnClick] = useState()


    const onConfirmClick = () => {
        dispatch(todoDeleted({todoId}))
        setOnClick(false)
        toast.success("Successfully deleted")

    }

    const onCancelClick = () => {
        setOnClick(false)
        toast.error("Todo was not deleted")
    }

    return (
        <div>
            <button
            onClick={() => setOnClick(true)}>
                <FaRegTrashAlt className='text-red-700 text-lg hover:text-red-800 hover:rotate-12 transition-all'/>
            </button>

            {onClick && 
            <div className='animate-card absolute flex flex-col items-center justify-center w-screen h-screen !z-50 overflow-hidden left-0 top-0 bg-opacity-90 bg-pink-50 gap-12'>
                <h4 className='text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-pink-700'>Do you confirm the deletion?</h4>

                <div className='flex items-center gap-4'>

                    <button className='py-4 px-6 min-w-36 bg-green-500 hover:bg-green-300 transition-all text-neutral-100 font-medium flex items-center justify-center gap-3 rounded-sm' onClick={onConfirmClick}>
                        <TiTick className='text-lg'/>
                        <p>Confirm</p>
                    </button>

                    <button className='py-4 px-6 min-w-36 bg-red-500 hover:bg-red-300 transition-all text-neutral-100 font-medium flex items-center justify-center gap-3 rounded-sm ' onClick={onCancelClick}>
                        <MdOutlineCancel className='text-lg'/>
                        <p>Cancel</p>
                    </button>

                </div>
            </div>
            }
        </div>
    )
}

export default DeleteButton