import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectPostById, updatePost, deletePost } from './postsSlice'
import { useParams, useNavigate } from 'react-router-dom'

import { selectAllUsers } from "../users/usersSlice";

const EditPostForm = () => {
    const { postId } = useParams()
    const navigate = useNavigate()

    const post = useSelector((state) => selectPostById(state, Number(postId)))
    const users = useSelector(selectAllUsers)

    const [title, setTitle] = useState(post?.title)
    const [content, setContent] = useState(post?.body)
    const [userId, setUserId] = useState(post?.userId)
    const [requestStatus, setRequestStatus] = useState('idle')

    const dispatch = useDispatch()

    if (!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setUserId(Number(e.target.value))

    const canSave = [title, content, userId].every(Boolean) && requestStatus === 'idle';

    const onSavePostClicked = () => {
        if (canSave) {
            try {
                setRequestStatus('pending')
                dispatch(updatePost({ id: post.id, title, body: content, userId, reactions: post.reactions })).unwrap()

                setTitle('')
                setContent('')
                setUserId('')
                navigate(`/post/${postId}`)
            } catch (err) {
                console.error('Failed to save the post', err)
            } finally {
                setRequestStatus('idle')
            }
        }
    }

    const usersOptions = users.map(user => (
        <option
            key={user.id}
            value={user.id}
        >{user.name}</option>
    ))

    const onDeletePostClicked = () => {
        try {
            setRequestStatus('pending')
            dispatch(deletePost({ id: post.id })).unwrap()

            setTitle('')
            setContent('')
            setUserId('')
            navigate('/')
        } catch (err) {
            console.error('Failed to delete the post', err)
        } finally {
            setRequestStatus('idle')
        }
    }

    return (
        <section className='flex flex-col items-center gap-4 my-24'>
            <h2 className='text-xl font-medium tracking-wider'>Edit Post</h2>

            <form>

                <div className='w-full flex flex-col items-start gap-2'>
                    <label htmlFor="postTitle" className="text-zinc-800 text-xs font-semibold uppercase tracking-widest">Post Title:</label>
                    <input
                        type="text"
                        id="postTitle"
                        name="postTitle"
                        value={title}
                        onChange={onTitleChanged}
                        className='w-full px-4 py-2 bg-neutral-950 opacity-80 focus:outline-none border-neutral-950 placeholder:text-sm placeholder:tracking-wide placeholder:text-zinc-500 text-white'
                    />
                </div>

                <div>
                    <label htmlFor="postAuthor" className="text-zinc-800 text-xs font-semibold uppercase tracking-widest">Author:</label>
                    <select id="postAuthor" value={userId} onChange={onAuthorChanged} className='w-full px-4 py-2 bg-neutral-950 opacity-80 focus:outline-none border-neutral-950 placeholder:text-sm text-white'>
                        <option value=""></option>
                        {usersOptions}
                    </select>
                </div>

                <div>
                    <label htmlFor="postContent" className="text-zinc-800 text-xs font-semibold uppercase tracking-widest">Content:</label>
                    <textarea
                        id="postContent"
                        name="postContent"
                        value={content}
                        onChange={onContentChanged}
                        className='w-full px-4 py-2 bg-neutral-950 opacity-80 focus:outline-none border-neutral-950 placeholder:text-sm placeholder:tracking-wide placeholder:text-zinc-500 text-white h-64'
                    />
                    </div>

                <button
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!canSave}
                    className="flex font-medium hover:bg-neutral-700 items-center text-sm gap-2 justify-center w-full px-4 py-3 rounded-sm bg-neutral-800 text-neutral-200 tracking-wider transition-all disabled:bg-zinc-400"
                >
                    Save Post
                </button>

                <button
                    type="button"
                    onClick={onDeletePostClicked}
                    className="flex font-medium hover:bg-red-400 items-center text-sm gap-2 justify-center w-full px-4 py-3 rounded-sm bg-red-800 text-neutral-200 tracking-wider transition-all"
                >
                    Delete Post
                </button>

            </form>
        </section>
    )
}

export default EditPostForm