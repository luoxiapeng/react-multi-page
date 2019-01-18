import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from "../common/Home";
const Router = (props)=>{
    return(
        <BrowserRouter>
            <div>
                <Route path='index' exact component={Home}></Route>
            </div>
        </BrowserRouter>

   )
}
export default Router;

// class Router extends Component{
//     render(){
//         return(
//             <BrowserRouter>
//                 <div>
//                     <Route path='/' exact component={Home}></Route>
//                 </div>
//             </BrowserRouter>
//         )
//     }
// }
// export default Router;