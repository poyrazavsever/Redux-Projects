import React, {useEffect} from 'react'
import { selectAllPost, getPostError, getPostsStatus, fetchPosts } from './postsSlice'
import { useSelector, useDispatch} from 'react-redux'
import PostsExcerpt from './PostsExcerpt'

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

    let content;
    if (postStatus === 'loading') {
        content = <p>"Loading..."</p>;
    } else if (postStatus === 'succeeded') {
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = orderedPosts.map(post => <PostsExcerpt key={post.id} post={post} />)
    } else if (postStatus === 'failed') {
        content = <p>{error}</p>;
    }


    return (
        <section className='flex flex-col items-center justify-center mt-16'>
            <h2 className='text-6xl font-semibold tracking-wider underline'>Posts</h2>
            <div className='mt-8 flex flex-col items-start gap-4'>
                {content}
            </div>
        </section>
    )



}

export default PostList