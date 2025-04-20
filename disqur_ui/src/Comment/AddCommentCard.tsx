import { AddComment } from "@mui/icons-material";
import { Button, Grid } from "@mui/material";
import { useState } from "react";
import { MainPageContent, useGlobalContext } from "../Utility/globalVariables";
import { Post } from "../Post/Domain/Post";
import { Disquregna } from "../Disquregna/Domain/Disquregna";
import { FetchWithBasicAuth } from "../Utility/fetchWithBasicAuth";

interface AddCommentProps{
    post: Post;
    disquregna: Disquregna;
}

export const AddCommentCard = ({post, disquregna} : AddCommentProps)=>{

    const[commentDetail, setCommentDetail] = useState('');
    const[isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('username') ? true : false);    

    const { globalPost, globalTopic, globalLoggedInUser, globalMainPageContent, setGlobalPost, setGlobalMainPageContent, setGlobalTargetNavigationPage} = useGlobalContext()

    const handleInputChange = (event: { target: { value: any; }; }) => {
        setCommentDetail(event.target.value);

        console.log('update comment ' + commentDetail)
      };

      var postId = post.id;
      var disquregnaId = disquregna.id;
      console.log('disquregna ID ' + disquregnaId);
      console.log('post ID ' + postId);

      async function AddComment()
      {
            await addComment();
      }

      async function addComment() {
        //await fetch().
        
        if(isLoggedIn)
        {
            const response = await FetchWithBasicAuth("/v1/comment", "POST", JSON.stringify({
                id: "",
                commentDetail: commentDetail,
                replyToCommentUUID:"",
                upVote:"3",
                downVote:"2",
                createdDateTime:"",  
               postId: postId,
                createdByDisquregnaId: disquregnaId
              }));

                await FetchWithBasicAuth("/v1/post/byPostId/" + globalPost.id, "GET").then((response: Post) => {
                    setGlobalPost(response);
                });            
            }
            else{
              
              setGlobalMainPageContent(MainPageContent.ViewLogInCard);
              setGlobalTargetNavigationPage(MainPageContent.ViewLogInCard);
            }
    }

    return (<div>
        <Grid minHeight={20}>
            <Grid item>
            <input onChange={handleInputChange} style={{ width: '500px', height: "70px" }}/>
            <Button onClick={AddComment}> Add Comment</Button>
            </Grid>
            </Grid>
    </div>);
}