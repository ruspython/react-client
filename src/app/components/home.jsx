/** In this file, we create a React component which incorporates components provided by material-ui */

const React = require('react');
const Header = require('./layout/header.jsx');


const Main = React.createClass({
    render() {
        return (
            <div className="centered">
                <h2>Home page</h2>
            </div>
        );
    },

    _handleTouchTap() {
        this.refs.superSecretPasswordDialog.show();
    }

});

module.exports = Main;
