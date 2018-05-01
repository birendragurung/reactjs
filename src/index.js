import React from 'react'
import ReactDOM from 'react-dom'
import {SkiDayList} from './components/SkiDayList'
import {App} from "./components/App";
import {BrowserRouter, Route, HashRouter, Switch} from 'react-router-dom';
import  {Whoops404} from "./components/Whoops404";

window.React = React;


ReactDOM.render(
    <BrowserRouter history={HashRouter.history}>
        <Switch>
            <Route path="/" component={App} />
            <Route path="list-days" component={App} />
            <Route path="add-day" component={App} />
            <Route path={"*"} component={Whoops404} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('react-container')
);
