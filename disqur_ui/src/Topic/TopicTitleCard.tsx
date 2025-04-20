import React from "react";
import { Topic } from "./Domain/Topics";
import { PostCard } from "../Post/PostCard";
import { Button, Link, Stack } from "@mui/material";
import { MainPageContent, useGlobalContext } from "../Utility/globalVariables";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface TopicTitleCardProps {
    topic: Topic,
    slashDMode: boolean,
    addGoBackButton: boolean | undefined
}

export const TopicTitleCard = ({topic, slashDMode, addGoBackButton} :  TopicTitleCardProps)=>{
    const { globalTopic, globalMainPageContent, setGlobalTopic, setGlobalMainPageContent, setGlobalShowTopicsMiniMenu } = useGlobalContext()

    

    function setTopic(): void {        
        setGlobalTopic(topic);
        setGlobalShowTopicsMiniMenu(false);
        setGlobalMainPageContent(MainPageContent.ViewATopicAndAllPosts);
    }

    return (
        <React.Fragment> 
            <Stack direction={"row"} spacing={1} alignItems={"center"}>
            {addGoBackButton ? <Button onClick={setTopic}><ArrowBackIcon/><Link
  component="button"
//   variant="body2"
  onClick={setTopic}
>    
<div className="postContent">{slashDMode ? "d/" + topic?.topicTitle : topic?.topicTitle}</div>
</Link>     
</Button> : <Link
  component="button"
//   variant="body2"
  onClick={setTopic}
>    
<div className="postContent">{slashDMode ? "d/" + topic?.topicTitle : topic?.topicTitle}</div>
</Link>     }

            </Stack>
            </React.Fragment>
    );
}