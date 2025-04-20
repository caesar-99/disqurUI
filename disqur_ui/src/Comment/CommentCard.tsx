import { ArrowDownward } from "@mui/icons-material";
import { Komment } from "./Domain/Komment";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { FetchWithBasicAuth } from "../Utility/fetchWithBasicAuth";

interface CommentProps{
    comment: Komment;
}

export const CommentCard = ({comment} : CommentProps)=>{
    const[commentInstance, setCommentInstance] = useState(comment);

    console.log('already got called' + comment.id?? "");

    async function upVote(): Promise<void> {                
                const response = await FetchWithBasicAuth("/v1/comment/upvote", "PUT", "", [["commentId", commentInstance.id?? ""]])    
                    .then((response: Komment) => {
                        setCommentInstance(response);
                    });            
                }
    

    async function downVote(): Promise<void> {  
        const response = await FetchWithBasicAuth("/v1/comment/downvote", "PUT", "", [["commentId", commentInstance.id?? ""]])    
                    .then((response: Komment) => {
                        setCommentInstance(response);
                    });            
                }
    

    return (
        <React.Fragment>
            <Box sx={{background : "#FFE28A"}}> 
            <div className="disabledMessageText">{commentInstance.createdByDisquregna.emailAddress} { " on  " } {commentInstance.createdDateTime?.toString()}</div>
            <div>
                <p></p>
                <p></p>
                <p></p>
            <div className="commentContent">{commentInstance.commentDetail}</div>
            <p></p>
            <p></p>
            <div></div>
            <div><Button onClick={upVote}><ArrowUpwardIcon/></Button> { "  "} {commentInstance.upVote} {"  "} <Button onClick={downVote}><ArrowDownward/></Button> { "  "} {commentInstance.downVote} <Button>Reply</Button></div>        
        </div>
        </Box>
        </React.Fragment>
    );
}