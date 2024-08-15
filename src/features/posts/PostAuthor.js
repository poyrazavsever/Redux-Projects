import { useSelector } from "react-redux";
import { selectAllPost } from "./postsSlice";

import React from 'react'
import { selectAllUsers } from "../users/usersSlice";

const PostAuthor = ({userId}) => {

    const users = useSelector(selectAllUsers)
    
    const author = users.find(user => user.id === userId)

  return (
    <span>by {author ? author.name : 'Unkown author'}</span>
  )
}

export default PostAuthor