import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoUpdated } from "../todos/todoSlice";
import toast from 'react-hot-toast';

// Icons
import { FaPencilAlt } from "react-icons/fa";

const UpdateButton = ({ todo }) => {
    const dispatch = useDispatch();

    const [update, setUpdate] = useState(false);

    // useState(todo.id) yerine doğrudan todo.id'yi değişkene atayarak kullanabilirsiniz
    const todoId = todo.id;
    const [title, setTitle] = useState(todo.title);
    const [content, setContent] = useState(todo.content);

    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value);

    const canSave = [title, content].every(Boolean);

    const onUpdateClick = (e) => {
        e.preventDefault();
        setUpdate(!update);
    };

    const onUpdateTodoClick = () => {
        if (canSave) {
            dispatch(todoUpdated({ todoId, title, content })); // id yerine todoId'yi ve diğer parametreleri gönderiyoruz
            console.log("updated todo");
            setUpdate(!update);
            toast.success("Update Successful")
        }
    };

    return (
        <div>
            <button onClick={onUpdateClick}>
                <FaPencilAlt className='text-pink-500 text-lg hover:text-pink-600 hover:rotate-12 transition-all'/>
            </button>


            {update && 
                <div className='animate-card absolute flex flex-col items-center justify-center w-screen h-screen !z-50 overflow-hidden left-0 top-0 bg-opacity-90 bg-pink-50 gap-12'>

                    <h2 className='text-4xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-900 to-pink-300'>Edit Your Todo</h2>

                    <form className='flex flex-col items-start gap-6'>
                    
                        <div className='flex flex-col items-start gap-3 w-72'>
                            <label htmlFor="title" className="text-zinc-800 text-sm font-semibold tracking-widest">Title</label>
                            <input 
                            type="text" 
                            id='title' 
                            value={title}
                            className='w-full px-4 py-2 rounded opacity-80 focus:outline-none border border-neutral-950 placeholder:text-sm placeholder:tracking-wide placeholder:text-zinc-500 text-black'
                            onChange={onTitleChanged}/>
                        </div>

                        <div className='flex flex-col items-start gap-3 w-72'>
                            <label htmlFor="content" className="text-zinc-800 text-sm font-semibold tracking-widest">Content</label>
                            <textarea 
                            type="text" 
                            id='content' 
                            value={content}
                            className='w-full h-52 px-4 py-2 rounded opacity-80 focus:outline-none border border-neutral-950 placeholder:text-sm placeholder:tracking-wide placeholder:text-zinc-500 text-black'
                            onChange={onContentChanged}/>
                        </div>

                        <button 
                        type='button'
                        className="flex uppercase tracking-widest text-sm font-semibold items-center justify-center w-full px-4 py-3 rounded bg-pink-600 text-white hover:bg-pink-700 transition-all disabled:bg-pink-200"
                        onClick={onUpdateTodoClick}
                        disabled={!canSave}
                        >
                            Update
                        </button>


                    </form>

                </div>

            }
        </div>
    );
};

export default UpdateButton;
