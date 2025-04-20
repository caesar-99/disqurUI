import { Box, Button, Grid, Link, Stack } from "@mui/material";
import React from "react";
import { TopicTitleCard } from "../Topic/TopicTitleCard";
import { MainPageContent, useGlobalContext } from "../Utility/globalVariables";
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';

export const ViewTopicsAndHome = () =>{
    const { globalMainPageContent, globalTopic, globalTopicsList, setGlobalMainPageContent, globalLoggedInUser, setGlobalLoggedInUser, setGlobalShowTopicsMiniMenu } = useGlobalContext()


    function showAddTopic(): void {
        setGlobalShowTopicsMiniMenu(false);
        setGlobalMainPageContent(MainPageContent.ViewAddTopic);
      }

      function showHome(): void {
        setGlobalMainPageContent(MainPageContent.ViewTopicAndPosts);
      }
    

    return (
        <Grid container xs={0} md={12} lg={12} alignItems={"left"} direction={"column"} spacing={2} marginTop={2} className="viewTopicsList">
        
        
                 <Grid item>
                    <Stack direction={"column"} alignItems={"left"}>
                        <Stack direction={"row"}>
                <Button onClick={showHome}><HomeIcon /></Button>
                <Link
                    component="button"
                    variant="body2"
                    underline="hover"
                    onClick={showHome}> Home</Link>
                    </Stack>                
                </Stack>
                </Grid>

                <Grid item>
                <div className="communityTitle">Communities</div>                
                </Grid>

                <Grid item>
                <Button onClick={showAddTopic}><AddIcon /> Create Community</Button>
                </Grid>

                <Grid item marginLeft={3}>
                {globalTopicsList != undefined && globalTopicsList!= null && globalTopicsList.length > 0 ? 
                globalTopicsList.map
                (c => 
                <React.Fragment>
                    <TopicTitleCard topic={c} slashDMode={false} addGoBackButton={false}  /> 
                    <Box minHeight = {15}/> </React.Fragment>
                    ) 
                    : "topics loading..."}                
                </Grid>
                
        </Grid>
    );
}