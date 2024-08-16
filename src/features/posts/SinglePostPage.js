import { useSelector } from 'react-redux'
import { selectPostById } from './postsSlice'

import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SinglePostPage = () => {
    const { postId } = useParams()

    const post = useSelector((state) => selectPostById(state, Number(postId)))

    if (!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }

    return (
        <article className='flex flex-col items-start gap-2 py-7 px-3 border border-zinc-400 w-96 rounded-md'>
            <h2 className='text-xl font-medium tracking-wider'>{post.title}</h2>
            <p>{post.body}</p>
            <p className="postCredit">
                <Link to={`/post/edit/${post.id}`}>Edit Post</Link>
                <div className='flex justify-between items-center w-full mt-2'>
                <span className='text-sm font-semibold tracking-wider'>
                    <PostAuthor userId={post.userId}/>
                </span>
                <span className='text-sm font-semibold tracking-wider'>
                    <TimeAgo timestamp={post.date}/>
                </span>
            </div>
            </p>
            <span className='text-sm font-semibold tracking-wider'>
                <ReactionButtons post={post}/>
            </span>
        </article>
    )
}

export default SinglePostPage