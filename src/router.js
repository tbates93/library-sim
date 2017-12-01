import React from "react"
import { Switch, Route } from "react-router-dom";

import Landing from "./components/Landing/Landing"
import Browse from "./components/Browse/Browse"


export default (
    <div>
        <Switch>
            <Route component={Landing} exact path='/'/>
            <Route component={Browse} path="/browse"/>
        </Switch>
    </div>
)