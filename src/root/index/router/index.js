import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from "../common/Home";
const Router = (props)=>{
    return(
        <BrowserRouter>
            <div>
                <Route path='/index' exact component={Home}></Route>
            </div>
        </BrowserRouter>

   )
}
export default Router;
