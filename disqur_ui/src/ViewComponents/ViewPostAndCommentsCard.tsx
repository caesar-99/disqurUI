import React from "react"
import { CommentCard } from "../Comment/CommentCard"
import { PostCard } from "../Post/PostCard"

export const ViewPostAndCommentsCard = ()=>{
    return (
        <React.Fragment>
        <PostCard/>
        <CommentCard/>
        </React.Fragment>
    )
}