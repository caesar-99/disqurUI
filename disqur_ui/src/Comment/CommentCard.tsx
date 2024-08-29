import { ArrowDownward } from "@mui/icons-material";
import { Komment } from "./Domain/Komment";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Button } from "@mui/material";
import React from "react";

interface CommentProps{
    comment: Komment;
}

export const CommentCard = ({comment} : CommentProps)=>{
    console.log('already got called');
    return (
        <React.Fragment>
            <div>
            <div><h1>{comment.commentDetail}</h1></div>
            <div></div>
            <div><ArrowUpwardIcon/> { "  "} {comment.upVote} {"  "} <ArrowDownward/> { "  "} {comment.downVote} <Button>Reply</Button></div>        
        </div>
        </React.Fragment>
    );
}