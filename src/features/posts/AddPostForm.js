import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { addNewPost } from './postsSlice';
import {postAdded} from "./postsSlice"
import { selectAllUsers } from '../users/usersSlice';

const AddPostForm = () => {

  const dispatch = useDispatch()

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')
  const [addRequestStatus, setAddRequestStatus] = useState('idle')

  const users = useSelector(selectAllUsers);

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)
  const onAuthorChanged = e => setUserId(e.target.value)

  
  const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle';

  const onSavePostClick = () => {
      if (canSave) {
        try {
            setAddRequestStatus('pending')
            dispatch(addNewPost({ title, body: content, userId })).unwrap()

            setTitle('')
            setContent('')
            setUserId('')
        } catch (err) {
            console.error('Failed to save the post', err)
        } finally {
            setAddRequestStatus('idle')
        }
    }
  }

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

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
          <label htmlFor="postAuthor" className="text-zinc-800 text-xs font-semibold uppercase tracking-widest">Select Author:</label>
          <select id="postAuthor" value={userId} onChange={onAuthorChanged} className='w-full px-4 py-2 bg-neutral-950 opacity-80 focus:outline-none border-neutral-950 placeholder:text-sm text-white'>
            <option value=""></option>
            {usersOptions}
          </select>
        </div>

        

        <div className='w-full flex flex-col items-start gap-2'>
          <label htmlFor="postTitle" className="text-zinc-800 text-xs font-semibold uppercase tracking-widest">Post Content:</label>
          <textarea 
            type="text"
            id='postTitle'
            name='postTitle'
            value={content}
            onChange={onContentChanged} 
            className='w-full px-4 py-2 bg-neutral-950 opacity-80 focus:outline-none border-neutral-950 placeholder:text-sm placeholder:tracking-wide placeholder:text-zinc-500 text-white'
            />
        </div>

        <button type='button' className="flex font-medium hover:bg-neutral-700 items-center text-sm gap-2 justify-center w-full px-4 py-3 rounded-sm bg-neutral-800 text-neutral-200 tracking-wider transition-all disabled:bg-zinc-400" onClick={onSavePostClick} disabled={!canSave}>Save Post</button>

      </form>
    </div>
  )
}

export default AddPostForm