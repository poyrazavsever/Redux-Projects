import React from 'react'
import { selectAllPost } from './postsSlice'
import {
    useSelector
} from 'react-redux'

const PostList = () => {
    const posts = useSelector(selectAllPost)

    const renderedPosts = posts.map(post => (
        <article key={posts.id} className='flex flex-col items-start gap-2 py-7 px-3 border border-zinc-400 w-96 rounded-md'>
            <h3 className='text-xl font-medium tracking-wider'>{post.title}</h3>
            <p>{post.content.substring(0,100)}</p>
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