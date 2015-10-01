"use strict";

import React from 'react';
import Router from 'react-router';

import Index from './components/index.jsx';
import Home from './components/home.jsx';
import Login from './components/auth/login.jsx';
import Logout from './components/auth/logout.jsx';
import Register from './components/auth/register.jsx';
import User from './components/users/users.jsx';
import NotFound from './not_found.jsx'


var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Redirect = Router.Redirect;

var routes = (
    <Route handler={Index}>
        <DefaultRoute name="home" handler={Home}/>

        <Route name="login" handler={Login}/>
        <Route name="logout" handler={Logout}/>
        <Route name="register" handler={Register}/>

        <Route name="users" handler={User} />

        <NotFoundRoute handler={NotFound}/>
    </Route>
);

module.exports = routes;