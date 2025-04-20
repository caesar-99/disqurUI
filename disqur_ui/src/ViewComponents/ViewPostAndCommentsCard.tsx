import React from "react"
import { CommentCard } from "../Comment/CommentCard"
import { PostCard } from "../Post/PostCard"
import { Komment } from "../Comment/Domain/Komment"
import { Post } from "../Post/Domain/Post"
import { useGlobalContext } from "../Utility/globalVariables"
import { TopicTitleCard } from "../Topic/TopicTitleCard"
import { AddCard } from "@mui/icons-material"
import { AddCommentCard } from "../Comment/AddCommentCard"
import { Box } from "@mui/material"
import { FetchWithBasicAuth } from "../Utility/fetchWithBasicAuth"


export const ViewPostAndCommentsCard = () => {

    const { globalPost, globalTopic, globalLoggedInUser} = useGlobalContext()
    const [comment, setComment] = React.useState<Komment[]>();
    const [post, setPost] = React.useState<Post>();

    React.useEffect(() => {
        console.log('am i getting hit');
       // getKomments();
        //getPosts();

    }, []);

    async function getKomments() {
        await FetchWithBasicAuth("/v1/comment", "GET").then((response: Komment[]) => {
            console.log('setting komments' + response[0].commentDetail)

            setComment(response);
        });
    }

    async function getPosts() {
        await FetchWithBasicAuth("/v1/post", "GET").then((response: Post[]) => {
            console.log('setting komments' + response[0].postDetail)

            setPost(response[2]);
        });
    }

    return (
        <React.Fragment>
            {globalTopic != null && globalTopic != undefined ? <TopicTitleCard topic={globalTopic} slashDMode={false} addGoBackButton={true} /> : "Topic loading"}
            {globalPost !== null && globalPost !== undefined ? <PostCard post={globalPost} topic={globalTopic}/> : "POST loading"}
            {globalPost !== null && globalPost !== undefined && globalLoggedInUser!= null && globalLoggedInUser != undefined? <div><p><p></p></p><AddCommentCard post={globalPost} disquregna={globalLoggedInUser}/> </div> : "Add comment pendig"}
            {globalPost !== null && globalPost !== undefined   && globalPost.comments!= null && globalPost.comments !=undefined
            && globalPost.comments.length > 0 ? globalPost.comments.map(c => <React.Fragment><CommentCard comment={c} /> <Box minHeight = {20}/> </React.Fragment>) : <div className="disabledMessageText">Add the first comment to this post</div>}
        </React.Fragment>
    )
}