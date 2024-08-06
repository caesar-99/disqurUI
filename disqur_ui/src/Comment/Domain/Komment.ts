import { Disquregna } from "../../Disquregna/Domain/Disquregna";
import { Post } from "../../Post/Domain/Post";

export interface Komment{
    commentId: string;
    post: Post;
    commentDetail: string;
    replyToCommentUUID: string;
    upVote: number;
    downVote: number;
    createdByDisquregna: Disquregna;
    createdDateTime: Date;
}