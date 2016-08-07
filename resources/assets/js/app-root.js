import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, useRouterHistory, IndexRoute } from 'react-router';
import { createHashHistory } from 'history';

import Reflux from "reflux";
import RefluxPromise from "reflux-promise";
Reflux.use(RefluxPromise(window.Promise));

import App from './components/App';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Reminder from './components/Reminder';
import Manage from './components/manage/Manage';
import Dashboard from './components/manage/Dashboard';
import GeoMaps from './components/manage/GeoMaps';
import Venues from './components/manage/Venues';
import Halls from './components/manage/Halls';
import Stands from './components/manage/Stands';
import Events from './components/manage/Events';
import Reservations from './components/manage/Reservations';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

ReactDOM.render((
    <Router history={appHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/signup" component={SignUp}/>
            <Route path="/signin" component={SignIn}/>
            <Route path="/reminder" component={Reminder}/>
            <Route path="/manage" component={Manage}>
                <IndexRoute component={Dashboard} />
                <Route path="/geomaps" component={GeoMaps}/>
                <Route path="/venues" component={Venues}/>
                <Route path="/halls" component={Halls}/>
                <Route path="/stands" component={Stands}/>
                <Route path="/events" component={Events}/>
                <Route path="/reservations" component={Reservations}/>
            </Route>
        </Route>
    </Router>
), document.getElementById('app'));


