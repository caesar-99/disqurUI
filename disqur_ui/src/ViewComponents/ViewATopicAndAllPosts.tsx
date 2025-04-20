import React from "react"
import { Topic } from "../Topic/Domain/Topics";
import { TopicTitleCard } from "../Topic/TopicTitleCard";
import { MainPageContent, useGlobalContext } from "../Utility/globalVariables";
import { PostCard } from "../Post/PostCard";
import { Box, Button, Grid } from "@mui/material";
import { TopicDetailCard } from "../Topic/TopicDetailCard";
import AddIcon from '@mui/icons-material/Add';

export const ViewATopicAndAllPosts = ()=>{
    const { globalTopic, setGlobalMainPageContent, globalShowTopicsMiniMenu } = useGlobalContext()

    React.useEffect(() => {
        console.log('topic i getting hit');        


    }, []);

    function showAddPost(): void {
        setGlobalMainPageContent(MainPageContent.ViewAddPost);
      }


    return (
        <React.Fragment>            
            <Grid container direction={"row"}>
            <Grid container direction={"row"} xs={12} alignItems={"center"}>
                <Grid item xs ={8}>
            <div className="communityTitle">d/{globalTopic.topicTitle}</div>
            </Grid>
            <Grid item xs ={4}>
            <Button onClick={showAddPost}> <AddIcon /> Create Post</Button>  
            </Grid>
            </Grid>
            <Grid container spacing={3} direction={"row"} xs={12} >
            <Grid item xs={8}> 
            {globalTopic && globalTopic.posts != undefined && globalTopic != null && globalTopic.posts.length > 0 ? globalTopic.posts.map(t =>  <React.Fragment><PostCard post={t} topic={globalTopic} /><Box height={10}></Box></React.Fragment>) :
             <div className="messageText">Add the first post</div> }
            </Grid>

            <Grid item xs={4}><TopicDetailCard topic={globalTopic}/></Grid>        
            </Grid>
            </Grid>
        </React.Fragment>
    )
}
