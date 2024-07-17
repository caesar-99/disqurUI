import React, { Component } from "react"
import { HashRouter, NavLink, Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import Stuff from "./Stuff";
import { Grid } from "@mui/material";

export const Main = () => {
  {
    return (
      <Grid>
        <HashRouter>
          <div>
            <h1>Disqur</h1>
            <ul className="header">
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
        </HashRouter>
      </Grid>
    );
  }
}