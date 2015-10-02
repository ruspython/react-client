import React from 'react'
import Constants from '../../constants.js'
import {List} from 'material-ui'
import UserListItem from './user-list-item.jsx'

export default React.createClass({
    getInitialState: function () {
        return {
            users: []
        }
    },
    componentDidMount: function () {
        $.get(Constants.API.Users, function (result) {
            var res, users = [];
            res = JSON.parse(result);
            users = Object.keys(res).map(function (key) {
                return res[key]
            });
            this.setState({users: users});
        }.bind(this));
    },
    render() {
        var users = this.state.users;

        return (
            <div className="centered">
                <List>
                    {users.map(function (user) {
                        return <UserListItem
                            user={user}
                            primaryText={user.name + ' ' + user.surname}
                            />;
                    })}
                </List>
            </div>
        )
    }
})