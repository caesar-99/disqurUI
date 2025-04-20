import { Komment } from "../../Comment/Domain/Komment";
import { Post } from "../../Post/Domain/Post";
import { Topic } from "../../Topic/Domain/Topics";

export interface Disquregna{
    id: string | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
    emailAddress: string | undefined;
    userName: string | undefined;
    password: string | undefined;
joinedDate: Date | undefined;
    topics: Topic[] | undefined;
   posts: Post[] | undefined;
    comments: Komment[] | undefined;
}