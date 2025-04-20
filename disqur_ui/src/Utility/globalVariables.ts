import { Post } from "../Post/Domain/Post";
import { createContext, useContext } from "react"
import { Topic } from "../Topic/Domain/Topics";
import { Disquregna } from "../Disquregna/Domain/Disquregna";

export enum MainPageContent {
    ViewPostAndComments = "ViewPostAndComments",
    ViewTopicAndPosts = "ViewTopicAndPosts",
    ViewATopicAndAllPosts = "ViewATopicAndAllPosts",
    ViewAddTopic = "ViewAddTopic",
    ViewAddPost = "ViewAddPost",
    ViewAddDisquregna = "ViewAddDisquregna",
    ViewRandomTopicsAndRandomPostCards = "ViewRandomTopicsAndRandomPostCards",
    ViewLogInCard = "ViewLogInCard",
}

// export class GlobalVariables{
//     static globalPost: Post;
//     static mainPageContent: MainPageContent = MainPageContent.ViewTopicAndPosts;
// }


export type GlobalContent = {
    globalMainPageContent: MainPageContent
    globalTargetNavigationPage: MainPageContent
    globalPost: Post
    globalTopic: Topic
    globalLoggedInUser: Disquregna
    globalTopicsList: Topic[]
    globalShowTopicsMiniMenu: boolean;
  setGlobalMainPageContent:(c: MainPageContent) => void
  setGlobalTargetNavigationPage:(n:MainPageContent)=>void
  setGlobalPost:(c: Post) => void
  setGlobalTopic:(c: Topic) => void
  setGlobalLoggedInUser : (d : Disquregna) => void
  setGlobalTopicsList : (d : Topic[]) => void
  setGlobalShowTopicsMiniMenu  : (d : boolean) => void
}
export const MyGlobalContext = createContext<GlobalContent>({
    globalMainPageContent: MainPageContent.ViewTopicAndPosts,
    globalTargetNavigationPage: MainPageContent.ViewATopicAndAllPosts,
    globalPost : {id: '', postDetail: '', postTitle: '', comments: [], upVote: 0, downVote: 0, topic: undefined, createdByDisquregna: undefined, createdDateTime: undefined}, // set a default value
    globalTopic: {id: undefined, topicTitle: undefined, topicDetail: undefined, createdByDisquregna: undefined, posts: undefined, createdDateTime: undefined},
    globalLoggedInUser: {id: undefined, firstName: undefined, lastName: undefined, emailAddress: undefined, userName: undefined, password: undefined, joinedDate: undefined,
        topics: undefined, posts: undefined, comments : undefined},
    globalTopicsList: ([{id: undefined, topicTitle: undefined, topicDetail: undefined, createdByDisquregna: undefined, posts: undefined, createdDateTime: undefined}]),
    globalShowTopicsMiniMenu : (false),
    setGlobalMainPageContent: () => {},
    setGlobalTargetNavigationPage: ()=>{},
    setGlobalPost: () => {},
    setGlobalTopic: () => {},
    setGlobalLoggedInUser : () => {},
    setGlobalTopicsList : () => {},
    setGlobalShowTopicsMiniMenu: () =>{}
})


export const useGlobalContext = () => useContext(MyGlobalContext);