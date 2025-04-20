import { Button } from "@mui/material";
import React, { useState } from "react"
import { MainPageContent, useGlobalContext } from "../Utility/globalVariables";
import { FetchWithBasicAuth } from "../Utility/fetchWithBasicAuth";
import { Topic } from "../Topic/Domain/Topics";
import { RichTextEditor } from "../Utility/RichTextEditor";

export const AddPostCard = ()=>{

    const { globalPost, globalTopic, globalLoggedInUser, setGlobalTopicsList, setGlobalMainPageContent, setGlobalTopic, globalTopicsList} = useGlobalContext()

    const[postTitle, setPostTitle] = useState('');
    const[postDetail, setPostDetail] = useState('');

    const handleInputChange = (event: { target: { value: any; }; }) => {
        setPostTitle(event.target.value);

        console.log('update post title ' + postTitle)
      };

      const handlePostDetailChange = (event: { target: { value: any; }; }) => {
        setPostDetail(event.target.value);

        console.log('update post detail ' + postDetail)
      };

    console.log("logged u " + globalLoggedInUser?.firstName);
    console.log("logged u " +globalLoggedInUser?.id);

      async function submitPost()
      {
            await addPost();
      }

      async function addPost() {
        //await fetch().
        
            const response = await FetchWithBasicAuth("/v1/post", "POST" , JSON.stringify({
                postTitle:postTitle,
                postDetail:postDetail,
                topicId:globalTopic.id,                            
                createdByDisquregnaId: globalLoggedInUser?.id
              }));

              await FetchWithBasicAuth("/v1/topic", "GET").then((response: Topic[]) => {
                setGlobalTopicsList(response);                    
                let freshTopic = response.find(t => t.id == globalTopic.id);

            if(freshTopic && freshTopic)
            {
                setGlobalTopic(freshTopic);
            }
            });  
            
            
            
            setGlobalMainPageContent(MainPageContent.ViewATopicAndAllPosts);
        
    }

    return (
        <React.Fragment>            
            {globalLoggedInUser && globalLoggedInUser.id ? 
            globalTopic && globalTopic.id ? 
            <div>
        <div>
            <h1>Add a Post to d/{ globalTopic.topicTitle}</h1>
        </div>
        <div>
            <div><h2>Post Title</h2></div>
            <div>
                <textarea onChange={handleInputChange} />
            </div>
            <div><h2>Post Detail</h2></div>
            <div>
                {/* <textarea onChange={handlePostDetailChange} /> */}
                <RichTextEditor setHTMLText={setPostDetail} placeHolderMessage="What's on your mind pal?"/>
                <Button onClick={submitPost}>POST</Button>
            </div>

        </div> </div>
        : <div><div className="messageText">To add a post to a target Community please navigate and view a community first</div></div>
        : <div className="messageText">To add a new post please log in first</div>
        }
        </React.Fragment>
    );
}