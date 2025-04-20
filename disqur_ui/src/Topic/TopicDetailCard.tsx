import React from "react";
import { Topic } from "./Domain/Topics";
import { PostCard } from "../Post/PostCard";
import { Button } from "@mui/material";
import { MainPageContent, useGlobalContext } from "../Utility/globalVariables";

interface TopicDetailCardProps {
    topic: Topic 
}

export const TopicDetailCard = ({topic} :  TopicDetailCardProps)=>{
    const { globalTopic, globalMainPageContent, setGlobalTopic, setGlobalMainPageContent } = useGlobalContext()

    

    function setTopic(): void {        
        setGlobalTopic(topic);
        setGlobalMainPageContent(MainPageContent.ViewATopicAndAllPosts);
    }

    return (
        <React.Fragment>            
            <div className="viewTopicsList">
            <b>{topic?.topicTitle}</b>
            <div>
                {topic?.topicDetail}
            </div>
            <p></p>
            <p></p>
            <p></p>
            <div className="disabledMessageText">
                {topic?.createdDateTime? "Created " + topic.createdDateTime : ''}
            </div>
            </div>            
            </React.Fragment>
    );
}