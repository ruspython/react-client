"use strict";

import React from "react";
import Router from "react-router";
import { LeftNav, RaisedButton, MenuItem } from "material-ui";

export default React.createClass({
    contextTypes: {
        router: React.PropTypes.func
    },

    menuItems: [
        {route: 'home', text: 'Home'},
        {route: 'logout', text: 'Logout'},
        {route: 'login', text: 'Login'},
        {route: 'register', text: 'Register'},
        {route: 'users', text: 'Users'}
    ],

    getInitialState: function () {
        return {
            selectedIndex: null
        };
    },

    render: function () {
        var header = <div onClick={this._onHeaderClick}>Logo's div</div>;

        return (
            <div>
                <RaisedButton label="Default"/>
                <LeftNav
                    ref="leftNav"
                    header={header}
                    docked={true}
                    menuItems={this.menuItems}
                    selectedIndex={this._getSelectedIndex()}
                    onChange={this._onLeftNavChange}/>
            </div>
        );
    },

    toggle: function () {
        this.refs.leftNav.toggle();
    },

    _getSelectedIndex: function () {
        var currentItem;

        var router = this.context.router;

        for (var i = this.menuItems.length - 1; i >= 0; i--) {
            currentItem = this.menuItems[i];
            if (currentItem.route && router.isActive(currentItem.route)) return i;
        }
    },

    _onLeftNavChange: function (e, key, payload) {
        var router = this.context.router;
        router.transitionTo(payload.route);
    },

    _onHeaderClick: function () {
        var router = this.context.router;
        router.transitionTo('root');
        this.refs.leftNav.close();
    }

});