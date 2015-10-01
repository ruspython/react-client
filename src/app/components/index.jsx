"use strict";

import React                from "react";
import Header               from "./layout/header.jsx"
import {RouteHandler}       from "react-router";
import {AppCanvas, Paper}   from "material-ui"

export default React.createClass({
    render(){
        return (
            <Paper zDepth={1}>
                <Header />
                <RouteHandler />
            </Paper>
        );
    }

});