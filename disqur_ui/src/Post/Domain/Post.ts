import { Komment } from "../../Comment/Domain/Komment";
import { Disquregna } from "../../Disquregna/Domain/Disquregna";
import { Topic } from "../../Topic/Domain/Topics";

export interface Post {
    id: string | undefined;
    comments: Komment[] | undefined;
    topic: Topic | undefined;
    postTitle: string |undefined;
    postDetail: string | undefined;
    upVote: number | undefined;
    downVote: number | undefined;
   createdByDisquregna: Disquregna | undefined;
    createdDateTime: Date | undefined;
}