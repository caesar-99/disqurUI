import { Komment } from "../../Comment/Domain/Komment";
import { Disquregna } from "../../Disquregna/Domain/Disquregna";
import { Topic } from "../../Topic/Domain/Topics";

export interface Post{
    postId: string;
    comments: Komment[];
    topic: Topic[];
  
    postDetail: string;
    upVote: number;
    downVote: number;
   createdByDisquregna: Disquregna;
    createdDateTime: Date;
}