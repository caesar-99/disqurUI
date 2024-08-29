import React from "react"
import { CommentCard } from "../Comment/CommentCard"
import { PostCard } from "../Post/PostCard"
import { Komment } from "../Comment/Domain/Komment"
import { Post } from "../Post/Domain/Post"

export const ViewPostAndCommentsCard = () => {
    const [comment, setComment] = React.useState<Komment>();
    const [post, setPost] = React.useState<Post>();

    React.useEffect(() => {
        console.log('am i getting hit');
        getKomments();
        getPosts();

    }, []);

    async function getKomments() {
        await fetch("http://localhost:8080/v1/comment").then((response) => {
            if (!response.ok) {
                console.log('failed to get komments')
                throw new Error(JSON.stringify("Error getting komments"));
            }
            else {
                return response.json();
            }

        }).then((response: Komment[]) => {
            console.log('setting komments' + response[0].commentDetail)

            setComment(response[0]);
        });
    }

    async function getPosts() {
        await fetch("http://localhost:8080/v1/post").then((response) => {
            if (!response.ok) {
                console.log('failed to get post')
                throw new Error(JSON.stringify("Error getting posts"));
            }
            else {
                return response.json();
            }

        }).then((response: Post[]) => {
            console.log('setting komments' + response[0].postDetail)

            setPost(response[0]);
        });
    }

    return (
        <React.Fragment>
            {post !=null ? <PostCard post={post}/> : "POST loading"}
            {comment != null ? <CommentCard comment={comment} /> : "KOMMENT loading"}
        </React.Fragment>
    )
}