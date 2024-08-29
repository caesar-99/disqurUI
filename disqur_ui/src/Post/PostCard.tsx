import React from "react";
import { Post } from "./Domain/Post";
import { ArrowDownward } from "@mui/icons-material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Button } from "@mui/material";

interface PostProps {
    post: Post
}

export const PostCard = ({ post }: PostProps) => {
    return (
        <React.Fragment> 
            <div><h3>{post.createdByDisquregna!.userName != undefined ? post.createdByDisquregna!.userName : "anon" }</h3></div>
            {/* <div><h3>{post.createdDateTime!.toISOString()}</h3></div> */}
            <div>
                <p>
                    <h1>
                        {post.postDetail}
                    </h1>
                </p>
                <p>
                <div><ArrowUpwardIcon/> { "  "} {post.upVote} {"  "} <ArrowDownward/> { "  "} {post.downVote} <Button>Reply</Button></div>        
                </p>
            </div>
        </React.Fragment>
    );
}