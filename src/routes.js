import React from "react";
import { Switch, Route } from "react-router-dom"
import Home from "./Views/Home/Home"
import Followers from "./Views/Followers/Followers"
export default (
    <Switch>
       <Route component={Home} exact path="/" />
        
         <Route component={Followers} path="/followers/:token" />
    </Switch>);