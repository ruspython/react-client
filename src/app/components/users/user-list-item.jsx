import React from 'react'
import Router from "react-router";
import Constants from '../../constants.js'
import {ListItem, Avatar} from 'material-ui'

export default React.createClass({
    contextTypes: {
        router: React.PropTypes.func
    },

    render() {
        var user = this.props.user;

        return (
            <ListItem
                leftAvatar={<Avatar src="http://baconmockup.com/40/40/" />}
                primaryText={user.name + ' ' + user.surname}
                onClick={this._onListItemClick}/>
        )
    },
    _onListItemClick: function () {
        var router = this.context.router;
        router.transitionTo('user', {userId: this.props.user.id});
    }
})