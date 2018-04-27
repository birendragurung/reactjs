import React from 'react'
import ReactDOM from 'react-dom'
import {SkiDayList} from './components/SkiDayList'
import {App} from "./components/App";
import {Route} from 'react-router'
import {Router} from 'react-router-dom'
import  {Whoops404} from "./components/Whoops404";

window.React = React;


ReactDOM.render(
    <Router history ={Route}>
            <Route path="/" component={App}/>
            <Route path="list-days" componen={App}/>
            <Route path="add-day" component={App}/>
            <Route path={"*"} component={Whoops404}/>
    </Router>,
    document.getElementById('react-container')
);
