import React, { useState } from "react";
import { Post } from "./Domain/Post";
import { ArrowDownward } from "@mui/icons-material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Box, Button, Grid, Stack } from "@mui/material";
import { MainPageContent, useGlobalContext } from "../Utility/globalVariables";
import { FetchWithBasicAuth } from "../Utility/fetchWithBasicAuth";
import { TopicDetailCard } from "../Topic/TopicDetailCard";
import { TopicTitleCard } from "../Topic/TopicTitleCard";
import { Topic } from "../Topic/Domain/Topics";
import parse from 'html-react-parser';
import { YouTubePlayer } from "../Utility/YouTubePlayer";


interface PostProps {
    post: Post,
    topic : Topic
}

export const PostCard = ({ post, topic }: PostProps) => {    
    const { globalPost, globalMainPageContent, setGlobalPost, setGlobalMainPageContent, setGlobalLoggedInUser} = useGlobalContext()    
    const[postInstance, setPostInstance] = useState(post);

    async function navigateToViewPostAndCommentsView(): Promise<void> {                
        setGlobalPost(post);
      
        setGlobalMainPageContent(MainPageContent.ViewPostAndComments);
    }

    // console.log('vide post' + post.postDetail);
    // console.log(post.postDetail?.split('v=')[1].split("\"")[0]);
    function handleClick() {
        
    }

    function getVideoUrl()
    {
        console.log('entrada' + post.postDetail);

        if(post.postDetail && post.postDetail.toUpperCase().includes("V=") && post.postDetail.split('v='))
        {
            console.log('vide post' + post.postDetail);

            var vid1 =  post.postDetail.split('v=')[1];
            console.log('vid1' + vid1);

            if(vid1) {

                if(vid1.includes("\"")) {
                    console.log('vid1 \"' + vid1);
                    return vid1.split("\"")[0];
                }
            }
        }
    }

    async function upVote(): Promise<void> {                
        const response = await FetchWithBasicAuth("/v1/post/upvote", "PUT", "", [["postId", postInstance.id?? ""]])    
            .then((response: Post) => {
                setPostInstance(response);
            });            
        }


async function downVote(): Promise<void> {  
const response = await FetchWithBasicAuth("/v1/post/downvote", "PUT", "", [["postId", postInstance.id?? ""]])    
            .then((response: Post) => {
                setPostInstance(response);
            });            
        }

    return (
        <React.Fragment> 
            <Box sx={{background : "#FFDEAD", p: 2, border: '1px solid #dbaf6e', '&:hover': { background: "#dec196", cursor: "pointer" }}} onClick={navigateToViewPostAndCommentsView} marginBottom={2} marginTop={2}>                
                {( postInstance != null && postInstance != undefined && postInstance.createdByDisquregna != undefined && postInstance.createdByDisquregna != null) && 
            post ? 
            globalMainPageContent == MainPageContent.ViewTopicAndPosts ? <TopicTitleCard topic={topic} slashDMode={true} addGoBackButton={false} />  :
            <div><h4>{postInstance.createdByDisquregna!.userName != undefined ? "u/"   +  postInstance.createdByDisquregna!.userName : "anon" }</h4></div> : <div>post not loaded yet</div>}            
            <div>
                <p className="postHeader">
                    {postInstance.postTitle}
                </p>
                <p className="postContent">
                    
                    {postInstance.postDetail?.toUpperCase().includes("YOUTUBE") && getVideoUrl() ? 
                    
                    <YouTubePlayer videoId={getVideoUrl()} />  : parse(postInstance.postDetail!)
                    }
                        
                    
                </p>
                <p>
                <Stack direction={"row"} alignItems={"center"} spacing={2}><Button onClick={upVote}>
                <ArrowUpwardIcon/></Button> { "  "} {postInstance.upVote} {"  "} <Button onClick={downVote}><ArrowDownward/></Button> { "  "} {postInstance.downVote} {<Button onClick={navigateToViewPostAndCommentsView}> {"Comments "} {postInstance.comments?.length}</Button>}
                </Stack>
                    
                    
                </p>
            </div>
            </Box>
        </React.Fragment>
    );
}