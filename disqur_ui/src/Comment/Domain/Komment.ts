import { Disquregna } from "../../Disquregna/Domain/Disquregna";
import { Post } from "../../Post/Domain/Post";

export interface Komment{
    id: string | undefined;
    post: Post | undefined;
    commentDetail: string | undefined;
    replyToCommentUUID: string | undefined;
    upVote: number | undefined;
    downVote: number | undefined;
    createdByDisquregna: Disquregna;
    createdDateTime: Date | undefined;
}