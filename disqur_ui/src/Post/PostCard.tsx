import React from "react";
import { Post } from "./Domain/Post";
import { ArrowDownward } from "@mui/icons-material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Box, Button } from "@mui/material";

interface PostProps {
    post: Post
}

export const PostCard = ({ post }: PostProps) => {
    console.log('did they pass me post? ' + post.createdByDisquregna?.disquregnaId);
    console.log('did they pass me post? ' + post.postId);

    return (
        <React.Fragment> 
            <Box>
                <div>Post</div>
            {post ? <div><h3>{post.createdByDisquregna!.userName != undefined ? post.createdByDisquregna!.userName : "anon" }</h3></div> : <div>post not loaded yet</div>}
            {/* <div><h3>{post.createdDateTime!.toISOString()}</h3></div> */}
            <div>
                <p>
                    <h2>
                        {post.postDetail}
                    </h2>
                </p>
                <p>
                <div><ArrowUpwardIcon/> { "  "} {post.upVote} {"  "} <ArrowDownward/> { "  "} {post.downVote} <Button>Reply</Button></div>        
                </p>
            </div>
            </Box>
        </React.Fragment>
    );
}