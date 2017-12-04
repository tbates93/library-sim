import React from "react"
import { Switch, Route } from "react-router-dom";

import Landing from "./components/Landing/Landing"
import Browse from "./components/Browse/Browse"
import Add from "./components/Add/Add"
import Details from "./components/Details/Details"
import Edit from './components/Edit/Edit'
import Topic from "./components/topic/Topic";


export default (
    <div>
        <Switch>
            <Route component={Landing} exact path='/'/>
            <Route component={Browse} path="/browse"/>
            <Route component={Add} path="/add"/>
            <Route component={Details} path="/details"/>
            <Route component={Edit} path="/edit"/>
            <Route exact path="/bob/:name" render={(props) => (
                <Topic {...props}/>
            )} component={Topic}/>
        </Switch>
    </div>
)