import React from "react"
import { Switch, Route } from "react-router-dom";

import Landing from "./components/Landing/Landing"
import Browse from "./components/Browse/Browse"
import Add from "./components/Add/Add"


export default (
    <div>
        <Switch>
            <Route component={Landing} exact path='/'/>
            <Route component={Browse} path="/browse"/>
            <Route component={Add} path="/add"/>
        </Switch>
    </div>
)