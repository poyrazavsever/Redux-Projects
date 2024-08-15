import React from 'react'
import { selectAllPost } from './postsSlice'
import { useSelector} from 'react-redux'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'

const PostList = () => {
    const posts = useSelector(selectAllPost)

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