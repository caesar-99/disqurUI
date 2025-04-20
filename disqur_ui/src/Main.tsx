import React, { Component, useEffect, useState } from "react"
import { HashRouter, NavLink, Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import Stuff from "./Stuff";
import { Box, Button, Grid, Input, Stack } from "@mui/material";
import Divider from '@mui/material/Divider';
import { PostCard } from "./Post/PostCard";
import { TopicTitleCard } from "./Topic/TopicTitleCard";
import { ViewPostAndCommentsCard } from "./ViewComponents/ViewPostAndCommentsCard";
import { ViewRandomTopicsAndRandomPostCards } from "./ViewComponents/ViewRandomTopicsAndRandomPostCards";
import { MainPageContent, useGlobalContext } from "./Utility/globalVariables";
import { ViewATopicAndAllPosts } from "./ViewComponents/ViewATopicAndAllPosts";
import { TopicDetailCard } from "./Topic/TopicDetailCard";
import { AddTopicCard } from "./Topic/AddTopicCard";
import { AddPostCard } from "./Post/AddPostCard";
import { Disquregna } from "./Disquregna/Domain/Disquregna";
import { FetchWithBasicAuth } from "./Utility/fetchWithBasicAuth";
import { AddDisquregnaCard } from "./Disquregna/AddDisquregnaCard";
import { LogInCard } from "./Disquregna/LogInCard";
import { Label } from "@mui/icons-material";
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import { red } from "@mui/material/colors";
import { ViewTopicsAndHome } from "./ViewComponents/ViewTopicsAndHome";
import MenuIcon from '@mui/icons-material/Menu';

export const Main = () => {

  const { globalMainPageContent, globalTopic, globalTopicsList, setGlobalMainPageContent, globalLoggedInUser, setGlobalLoggedInUser, setGlobalTopicsList, globalShowTopicsMiniMenu, setGlobalShowTopicsMiniMenu } = useGlobalContext()

  const [pageContent, setPageContent] = React.useState(globalMainPageContent);
  const [disquregna, setDisquregna] = React.useState<Disquregna>(globalLoggedInUser);

  console.log('content changed ' + globalMainPageContent);

  const [isMobile, setIsMobile] = useState(false);

 
//choose the screen size 
const handleResize = () => {
  if (window.innerWidth < 720) {
      setIsMobile(true)
  } else {
      setIsMobile(false)
  }
}

// create an event listener
useEffect(() => {
  window.addEventListener("resize", handleResize);
  if (window.innerWidth < 720) {
    setIsMobile(true)
} else {
    setIsMobile(false)
}
}, [])
  

  function getCenterStage()
  {            

    switch(globalMainPageContent)
    {
      case MainPageContent.ViewAddPost:
        return <AddPostCard />;
      case MainPageContent.ViewAddTopic:
        return <AddTopicCard />;
      case MainPageContent.ViewATopicAndAllPosts:
        return <ViewATopicAndAllPosts />;
      case MainPageContent.ViewTopicAndPosts:
          return <ViewRandomTopicsAndRandomPostCards />;
      case MainPageContent.ViewPostAndComments:
          return <ViewPostAndCommentsCard />;
      case MainPageContent.ViewAddDisquregna:
        return <AddDisquregnaCard/>
      case MainPageContent.ViewRandomTopicsAndRandomPostCards:
      return <ViewRandomTopicsAndRandomPostCards />;
      case MainPageContent.ViewLogInCard:
        return <LogInCard />
    }
  }
  
  function showAddTopic(): void {
    setGlobalMainPageContent(MainPageContent.ViewAddTopic);
  }

  function showAddPost(): void {
    setGlobalMainPageContent(MainPageContent.ViewAddPost);
  }

  function showAddDisquregna(): void {
    setGlobalMainPageContent(MainPageContent.ViewAddDisquregna);
  }

  function showLogInDisquregna(): void {
    setGlobalMainPageContent(MainPageContent.ViewLogInCard);
  }

  function logOut(): void {
    localStorage.setItem('username', '');
    setGlobalLoggedInUser({id: undefined, firstName: undefined, lastName: undefined, emailAddress: undefined, userName: undefined, password: undefined, joinedDate: undefined,
      topics: undefined, posts: undefined, comments : undefined});
      setGlobalTopicsList([{id: undefined, topicTitle: undefined, topicDetail: undefined, createdByDisquregna: undefined, posts: undefined, createdDateTime: undefined}])
  }

  function showHideTitlesCard(): void {
    setGlobalShowTopicsMiniMenu(!globalShowTopicsMiniMenu);
  }

    return (
      <Grid container direction={"row"} xs={12}>
        {/* <HashRouter>
          <div> */}
            <Grid container xs={12} alignItems={"center"}>
              <Grid item xs={2}>{isMobile ? <h2><b>Disqqur</b></h2> : <h1><b>Disqqur</b></h1>}</Grid>
              <Grid item xs={1} md={3} lg={3}></Grid>
              <Grid item xs={0} md={2} lg={2} display={{xs: "none", sm: "block"}}><Input placeholder="search Disqur" fullWidth={true}/></Grid>
              <Grid item xs={0}  md={3} lg={3}></Grid>
              <Grid item xs={0} md={2} lg={2}>                
                {globalLoggedInUser && globalLoggedInUser.id  ? 
                <React.Fragment> 
                   <Stack direction="row" spacing={1}>                
                <Button onClick={showAddPost}> <AddIcon /> Create Post</Button>  
                <Avatar>{globalLoggedInUser.userName?.charAt(0).toUpperCase()}</Avatar>
                <Button onClick={logOut}><LogoutIcon/>Log out</Button> 
                </Stack>
                </React.Fragment> : 
                <React.Fragment>
                <Button onClick={showAddDisquregna}> Sign Up</Button>
                <Button onClick={showLogInDisquregna} sx={{background: red}}>Log in</Button>
                </React.Fragment>
                }                                                     
                </Grid>     
              <Grid item xs = {1} md={12} lg={12}>
                <Divider variant="fullWidth"></Divider>
                </Grid>   
            </Grid>
            <Grid container xs={12} md={12} lg={12} direction={"row"}>
              {isMobile ? <Button onClick={showHideTitlesCard}><MenuIcon/></Button>: null}
              <Grid item xs={12} md={2} lg={2} display={{xs: globalShowTopicsMiniMenu? "block": "none", sm: "block"}}>                
              <ViewTopicsAndHome />
              </Grid>              
              <Grid item xs={0} md={2} lg={2}></Grid>
              <Grid item xs={12} md={5} lg={5} display={{xs: globalShowTopicsMiniMenu? "none": "block", sm: "block"}}>{getCenterStage()}</Grid>              
              <Grid item xs={0} md={3} lg={3}></Grid>
            </Grid>
      </Grid>
    );
  }
