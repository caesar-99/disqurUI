import { Disquregna } from "../../Disquregna/Domain/Disquregna";
import { Post } from "../../Post/Domain/Post";

export interface Topic{
   topicId: string | undefined;
    
    topicTitle: string | undefined;
   posts: Post[] | undefined;
createdByDisquregna: Disquregna | undefined;
    
    createdDateTime: Date | undefined;
}