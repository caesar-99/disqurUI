import React from "react"
import { Topic } from "../Topic/Domain/Topics";
import { TopicTitleCard } from "../Topic/TopicTitleCard";
import { PostCard } from "../Post/PostCard";
import { useGlobalContext } from "../Utility/globalVariables";
import { Box } from "@mui/material";
import { FetchWithBasicAuth } from "../Utility/fetchWithBasicAuth";

export const ViewRandomTopicsAndRandomPostCards = ()=>{
    const [topics, setTopics] = React.useState<Topic[]>();    
    const { globalTopicsList, setGlobalTopicsList, setGlobalLoggedInUser, globalLoggedInUser} = useGlobalContext()

    React.useEffect(() => {               
        if(globalLoggedInUser && globalLoggedInUser.id) {getTopics();        }

    }, []);

    async function getTopics() {
        await FetchWithBasicAuth("/v1/topic", "GET").then((response: Topic[]) => {
            setTopics(response);
            setGlobalTopicsList(response);
            var d = (response as Topic[])[0].createdByDisquregna;            
        });
   }

   function TopicAndCommentsCard(topic : Topic)
   {
    return (
            <React.Fragment>                 
                <div>
                    <div/>
                {topic?.posts && topic.posts?.length > 0 ?  <React.Fragment><PostCard post={topic.posts[0]} topic={topic}  /><Box minHeight="20"></Box> </React.Fragment>: null}
                </div>
                </React.Fragment>
    )
   }

    return (
        <React.Fragment> 
            {globalLoggedInUser && globalLoggedInUser.id?            
            topics !== null && topics !== undefined && topics.length > 0 ? 
            topics.map(t =>  TopicAndCommentsCard(t)) : <div>topics loading...</div> :
            <div className="messageText">Log in or sign up to view disqqurs</div>
            }
        </React.Fragment>
    )
}