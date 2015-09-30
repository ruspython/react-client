/** In this file, we create a React component which incorporates components provided by material-ui */

const React = require('react');
const Tabs = require('material-ui/lib/tabs/tabs');
const Tab = require('material-ui/lib/tabs/tab');
const Dialog = require('material-ui/lib/dialog');
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const LightRawTheme = require('material-ui/lib/styles/raw-themes/light-raw-theme');
const Colors = require('material-ui/lib/styles/colors');
const LoginForm = require('./login.jsx');
const RegisterForm = require('./register.jsx');

const Main = React.createClass({

    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getInitialState () {
        return {
            muiTheme: ThemeManager.getMuiTheme(LightRawTheme),
        };
    },

    getChildContext() {
        return {
            muiTheme: this.state.muiTheme,
        };
    },

    componentWillMount() {
        let newMuiTheme = ThemeManager.modifyRawThemePalette(this.state.muiTheme, {
            accent1Color: Colors.deepOrange500
        });

        this.setState({muiTheme: newMuiTheme});
    },

    render() {

        let containerStyle = {
            textAlign: 'center'
        };

        let standardActions = [
            {text: 'Okay'}
        ];

        return (
            <div style={containerStyle}>
                <Tabs>
                    <Tab label="Login">
                        <LoginForm />
                    </Tab>
                    <Tab label="Register">
                        <RegisterForm />
                    </Tab>
                </Tabs>

            </div>
        );
    },

    _handleTouchTap() {
        this.refs.superSecretPasswordDialog.show();
    }

});

module.exports = Main;
