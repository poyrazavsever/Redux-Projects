import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';

import { todoAdded } from './todoSlice'

function AddTodoForm() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Elements

    const [title, setTitle] = useState();
    const [content, setContent] = useState();


    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const canSave = [title, content].every(Boolean)

    const onSaveTodoClick = () => {
        if (canSave) {
            
            dispatch(todoAdded(title, content))
            console.log("add new todo")
                
            setTitle("")
            setContent("")
            navigate("/")
        }
    }



  return (
    <div className='flex items-start justify-center mt-24 animate-card'>
        <div className='w-80 flex flex-col items-start gap-6'>
            <h2 className='text-4xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-900 to-pink-300'>Add New Todo!</h2>

            <form className='flex flex-col items-start gap-6'>
            
                <div className='flex flex-col items-start gap-3 w-72'>
                    <label htmlFor="title" className="text-zinc-800 text-sm font-semibold tracking-widest">Title</label>
                    <input 
                    type="text" 
                    id='title' 
                    className='w-full px-4 py-2 rounded opacity-80 focus:outline-none border border-neutral-950 placeholder:text-sm placeholder:tracking-wide placeholder:text-zinc-500 text-black'
                    onChange={onTitleChanged}/>
                </div>

                <div className='flex flex-col items-start gap-3 w-72'>
                    <label htmlFor="title" className="text-zinc-800 text-sm font-semibold tracking-widest">Content</label>
                    <textarea 
                    type="text" 
                    id='title' 
                    className='w-full h-52 px-4 py-2 rounded opacity-80 focus:outline-none border border-neutral-950 placeholder:text-sm placeholder:tracking-wide placeholder:text-zinc-500 text-black'
                    onChange={onContentChanged}/>
                </div>

                <button 
                type='button'
                className="flex uppercase tracking-widest text-sm font-semibold items-center justify-center w-full px-4 py-3 rounded bg-pink-600 text-white hover:bg-pink-700 transition-all"
                onClick={onSaveTodoClick}
                >
                    Save
                </button>

            </form>
        </div>
    </div>
  )
}

export default AddTodoForm