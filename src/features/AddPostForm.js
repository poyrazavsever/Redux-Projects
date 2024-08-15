import {useState} from 'react'
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit'; // custom id üretmeye yarıyor. İşlevsel :)

import {postAdded} from "./posts/postsSlice"


const AddPostForm = () => {

  const dispatch = useDispatch()

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('')

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)

  const onSavePostClick = () => {
    if (title && content) {
      dispatch(
        postAdded(title, content)
      )

      setTitle('')
      setContent('')

    }
  }

  return (
    <div className='flex flex-col items-center gap-4 my-24'>

      <h2 className='text-3xl font-bold tracking-wider'>Add a New Post!</h2>

      <form className='w-96 flex flex-col items-start gap-6 mt-6'>

        <div className='w-full flex flex-col items-start gap-2'>
          <label htmlFor="postTitle" className="text-zinc-800 text-xs font-semibold uppercase tracking-widest">Post Title:</label>
          <input 
            type="text"
            id='postTitle'
            name='postTitle'
            value={title}
            onChange={onTitleChanged} 
            className='w-full px-4 py-2 bg-neutral-950 opacity-80 focus:outline-none border-neutral-950 placeholder:text-sm placeholder:tracking-wide placeholder:text-zinc-500 text-white'
            />
        </div>

        <div className='w-full flex flex-col items-start gap-2'>
          <label htmlFor="postTitle" className="text-zinc-800 text-xs font-semibold uppercase tracking-widest">Post Content:</label>
          <input 
            type="text"
            id='postTitle'
            name='postTitle'
            value={content}
            onChange={onContentChanged} 
            className='w-full px-4 py-2 bg-neutral-950 opacity-80 focus:outline-none border-neutral-950 placeholder:text-sm placeholder:tracking-wide placeholder:text-zinc-500 text-white'
            />
        </div>

        <button type='button' className="flex font-medium hover:bg-neutral-700 items-center text-sm gap-2 justify-center w-full px-4 py-3 rounded-sm bg-neutral-800 text-neutral-200 tracking-wider transition-all" onClick={onSavePostClick}>Save Post</button>

      </form>
    </div>
  )
}

export default AddPostForm