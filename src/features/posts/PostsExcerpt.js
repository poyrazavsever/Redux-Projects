import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButtons'

const PostsExcerpt = ({ post }) => {
  return (
        <article className='flex flex-col items-start gap-2 py-7 px-3 border border-zinc-400 w-96 rounded-md'>
            <h3 className='text-xl font-medium tracking-wider'>{post.title}</h3>
            <p>{post.body.substring(0,100)}</p>
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
  )
}

export default PostsExcerpt