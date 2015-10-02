import React from 'react'
import Constants from '../../constants.js'
import {List} from 'material-ui'
import UserListItem from './user-list-item.jsx'
import {Card, CardHeader, CardTitle, CardMedia, CardText, CardActions} from 'material-ui'

export default React.createClass({
    getInitialState: function () {
        return {
            user: {}
        }
    },
    componentDidMount: function () {
        $.get(Constants.API.Users + this.props.params.userId, function (result) {
            this.setState({user: JSON.parse(result)});
        }.bind(this));
    },
    render() {
        var user = this.state.user;
        return (
            <div className="centered">
                <Card>
                    <CardHeader
                        title={user.name + " " + user.surname}
                        avatar="http://baconmockup.com/40/40/"/>
                    <CardMedia>
                        <img src="http://lorempixel.com/600/337/nature/"/>
                    </CardMedia>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>


                </Card>
            </div>
        )
    }
})