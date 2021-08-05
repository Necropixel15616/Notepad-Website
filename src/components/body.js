import React from 'react';
import {Route, Switch} from "react-router-dom";
import { Form, Read } from '../pages';

export function Body(){
    return(
        <div style={{height:"100%", border:1}}>
            <Switch>
                <Route exact path="/"><Form /></Route>
                <Route path="/read:index"><Read /></Route>
                <Route path="/:index"><Form /></Route>
                <Route>Error 404, Page not Found</Route>
            </Switch>
        </div>
    )
}