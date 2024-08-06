import { Komment } from "../../Comment/Domain/Komment";
import { Post } from "../../Post/Domain/Post";
import { Topic } from "../../Topic/Domain/Topics";

export interface Disquregna{
    disquregnaId: string;
    firstName: string;
    lastName: string;
    emailAddress: string;
    userName: string;
    password: string;
joinedDate: Date;
    topics: Topic[];
   posts: Post[];
    comments: Komment[];
}