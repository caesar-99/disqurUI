import { Disquregna } from "../../Disquregna/Domain/Disquregna";
import { Post } from "../../Post/Domain/Post";

export interface Topic{
   topicId: string;
    
    topicTitle: string;
   posts: Post[];
createdByDisquregna: Disquregna;
    
    createdDateTime: Date;
}