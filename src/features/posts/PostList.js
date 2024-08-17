import React from 'react'
import { selectAllPost, getPostError, getPostsStatus } from './postsSlice'
import { useSelector } from 'react-redux'
import PostsExcerpt from './PostsExcerpt'

const PostList = () => {

    const posts = useSelector(selectAllPost);
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostError);

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
            <div className='mt-8 flex flex-col items-start gap-4'>
                {content}
            </div>
        </section>
    )



}

export default PostList