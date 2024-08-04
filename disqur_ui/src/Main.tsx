import React, { Component } from "react"
import { HashRouter, NavLink, Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import Stuff from "./Stuff";
import { Grid, Input } from "@mui/material";
import Divider from '@mui/material/Divider';
import { PostCard } from "./Post/PostCard";
import { TopicCard } from "./Topic/TopicCard";

export const Main = () => {
  {
    return (
      <Grid container spacing={2} direction={"row"}>
        {/* <HashRouter>
          <div> */}
            <Grid container xs={12}>
              <Grid item xs={2}><h1>Disqur</h1></Grid>
              <Grid item xs={8}><Input placeholder="search Disqur"/></Grid>
              <Grid item xs={2}>Log in</Grid>     
              <Grid item xs = {12}>
                <Divider variant="fullWidth"></Divider>
                </Grid>   
            </Grid>
            <Grid container xs={12} direction={"row"}>
              <Grid item xs={2}><h1>List of topics</h1></Grid>
              <Grid item xs={8}><PostCard/></Grid>
              <Grid item xs={2}><TopicCard/></Grid>        
            </Grid>










            {/* <ul className="header">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/stuff">Stuff</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <div className="content">
              <Routes>
                <Route path="/" Component={Home} />
                <Route path="/stuff" Component={Stuff} />
                <Route path="/contact" Component={Contact} />
              </Routes>
            </div>
          </div>
        </HashRouter> */}
      </Grid>
    );
  }
}