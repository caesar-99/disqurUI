import { Komment } from "../../Comment/Domain/Komment";
import { Disquregna } from "../../Disquregna/Domain/Disquregna";
import { Topic } from "../../Topic/Domain/Topics";

export interface Post{
    postId: string | undefined;
    comments: Komment[] | undefined;
    topic: Topic[] | undefined;
  
    postDetail: string | undefined;
    upVote: number | undefined;
    downVote: number | undefined;
   createdByDisquregna: Disquregna;
    createdDateTime: Date | undefined;
}