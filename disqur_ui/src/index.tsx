import React, { useState } from "react";
import ReactDOM from "react-dom";
import {Main} from "./Main";
import "./index.css" ;
import { MainPageContent, MyGlobalContext } from "./Utility/globalVariables";
import { Post } from "./Post/Domain/Post";
import { Topic } from "./Topic/Domain/Topics";
import { Disquregna } from "./Disquregna/Domain/Disquregna";
import userEvent from "@testing-library/user-event";



function App() {
  const [globalPost, setGlobalPost] = useState<Post>({id: '', postDetail: '', postTitle: '', comments: [], upVote: 0, downVote: 0, topic: undefined, createdByDisquregna: undefined, createdDateTime: undefined})
const [globalMainPageContent, setGlobalMainPageContent] = useState<MainPageContent>(MainPageContent.ViewTopicAndPosts)
const [globalTopic, setGlobalTopic] = useState<Topic>({id: undefined, topicTitle: undefined, topicDetail: undefined, createdByDisquregna: undefined, posts: undefined, createdDateTime: undefined})
const [globalLoggedInUser, setGlobalLoggedInUser] = useState<Disquregna> ({id: undefined, firstName: undefined, lastName: undefined, emailAddress: undefined, userName: undefined, password: undefined, joinedDate: undefined,
topics: undefined, posts: undefined, comments : undefined})
const [globalTopicsList, setGlobalTopicsList] = useState<Topic[]>([{id: undefined, topicTitle: undefined, topicDetail: undefined, createdByDisquregna: undefined, posts: undefined, createdDateTime: undefined}]);
const [globalTargetNavigationPage, setGlobalTargetNavigationPage] = useState<MainPageContent>(MainPageContent.ViewTopicAndPosts);
const [globalShowTopicsMiniMenu, setGlobalShowTopicsMiniMenu] = useState<boolean>(false);
  return (
  <MyGlobalContext.Provider value= {{ globalPost, globalMainPageContent, setGlobalMainPageContent, globalTargetNavigationPage, setGlobalTargetNavigationPage, setGlobalPost, globalTopic, setGlobalTopic, globalLoggedInUser, setGlobalLoggedInUser, globalTopicsList, setGlobalTopicsList, globalShowTopicsMiniMenu, setGlobalShowTopicsMiniMenu }}>
    <Main/>
    </MyGlobalContext.Provider>
  );

}

ReactDOM.render(
  <App />, 
  document.getElementById("root")
);