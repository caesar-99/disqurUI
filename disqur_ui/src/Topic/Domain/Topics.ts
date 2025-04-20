import { Disquregna } from "../../Disquregna/Domain/Disquregna";
import { Post } from "../../Post/Domain/Post";

export interface Topic{
   id: string | undefined;
    
    topicTitle: string | undefined;
    topicDetail: string | undefined;
   posts: Post[] | undefined;
createdByDisquregna: Disquregna | undefined;
    
    createdDateTime: string | undefined;
}