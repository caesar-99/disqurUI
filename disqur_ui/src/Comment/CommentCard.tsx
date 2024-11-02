import { ArrowDownward } from "@mui/icons-material";
import { Komment } from "./Domain/Komment";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Box, Button } from "@mui/material";
import React from "react";

interface CommentProps{
    comment: Komment;
}

export const CommentCard = ({comment} : CommentProps)=>{
    console.log('already got called');
    return (
        <React.Fragment>
            <Box>
                <div>COMMENT</div>
            <div>
            <div><h4>{comment.commentDetail}</h4></div>
            <div></div>
            <div><ArrowUpwardIcon/> { "  "} {comment.upVote} {"  "} <ArrowDownward/> { "  "} {comment.downVote} <Button>Reply</Button></div>        
        </div>
        </Box>
        </React.Fragment>
    );
}