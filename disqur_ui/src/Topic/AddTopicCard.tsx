import { Button } from "@mui/material";
import React, { useState } from "react"
import { MainPageContent, useGlobalContext } from "../Utility/globalVariables";
import { FetchWithBasicAuth } from "../Utility/fetchWithBasicAuth";
import { Topic } from "./Domain/Topics";

export const AddTopicCard = ()=>{

    const { globalPost, globalTopic, globalLoggedInUser, setGlobalTopicsList, setGlobalMainPageContent} = useGlobalContext()

    const[topicTitle, setTopicTitle] = useState('');
    const[topicDetail, setTopicDetail] = useState('');

    const handleInputChange = (event: { target: { value: any; }; }) => {
        setTopicTitle(event.target.value);

        console.log('update topic title ' + topicTitle)
      };

      const handleTopicDetailChange = (event: { target: { value: any; }; }) => {
        setTopicDetail(event.target.value);

        console.log('update topic detail ' + topicDetail)
      };

    console.log("logged u " + globalLoggedInUser?.firstName);
    console.log("logged u " +globalLoggedInUser?.id);

      async function addCommunity()
      {
            await addTopic();
      }

      async function addTopic() {
        //await fetch().
        
            const response = await FetchWithBasicAuth("/v1/topic", 'POST',
               JSON.stringify({
                topicTitle:topicTitle,
                topicDetail:topicDetail,
                createdByDisquregnaId: globalLoggedInUser?.id
              }));  
              
            
                await FetchWithBasicAuth("/v1/topic", "GET").then((response: Topic[]) => {
                    setGlobalTopicsList(response);                    
                });  
                
                setGlobalMainPageContent(MainPageContent.ViewTopicAndPosts);
    }

    return (
        <React.Fragment>
          {globalLoggedInUser && globalLoggedInUser.id ? 
          <div>
        <div>
            <h1>Add a Community</h1>
        </div>
        <div>
            <div><h2>Community Name</h2></div>
            <div>
                <textarea onChange={handleInputChange} style={{ width: '300px', height: "30px" }}/>
            </div>
            <div><h2>Community Description</h2></div>
            <div>
                <textarea onChange={handleTopicDetailChange} style={{ width: '500px', height: "70px" }}/>
                <Button onClick={addCommunity}>Submit Community</Button>
            </div>

        </div>
        </div>
        : <div className="messageText">To create a new Community please log in first</div>}
        </React.Fragment>
    );
}