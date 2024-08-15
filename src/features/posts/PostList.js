import React, {useEffect} from 'react'
import { selectAllPost, getPostError, getPostsStatus, fetchPosts } from './postsSlice'
import { useSelector, useDispatch} from 'react-redux'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButton'

const PostList = () => {

    const dispatch = useDispatch();


    const posts = useSelector(selectAllPost)
    const error = useSelector(getPostError)
    const postStatus = useSelector(getPostsStatus)

    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchPosts())
        }
    }, [postStatus, dispatch])

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderedPosts = orderedPosts.map(post => (
        <article key={posts.id} className='flex flex-col items-start gap-2 py-7 px-3 border border-zinc-400 w-96 rounded-md'>
            <h3 className='text-xl font-medium tracking-wider'>{post.title}</h3>
            <p>{post.content.substring(0,100)}</p>
            <div className='flex justify-between items-center w-full mt-2'>
                <span className='text-sm font-semibold tracking-wider'>
                    <PostAuthor userId={post.userId}/>
                </span>
                <span className='text-sm font-semibold tracking-wider'>
                    <TimeAgo timestamp={post.date}/>
                </span>
            </div>
            <span className='text-sm font-semibold tracking-wider'>
                <ReactionButtons post={post}/>
            </span>
        </article>
    ))

    return (
        <section className='flex flex-col items-center justify-center mt-16'>
            <h2 className='text-6xl font-semibold tracking-wider underline'>Posts</h2>
            <div className='mt-8 flex flex-col items-start gap-4'>
                {renderedPosts}
            </div>
        </section>
    )



}

export default PostList