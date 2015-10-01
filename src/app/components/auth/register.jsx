const React = require('react');
const Paper = require('material-ui/lib/paper');
const RaisedButton = require('material-ui/lib/raised-button');
const TextField = require('material-ui/lib/text-field');
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const LightRawTheme = require('material-ui/lib/styles/raw-themes/light-raw-theme');
const Colors = require('material-ui/lib/styles/colors');


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
        return (
            <div className="centered">
                <form action="http://localhost:5000/api/v1/register" method="post">
                    <p>
                        <TextField
                            hintText="Login"

                            />
                    </p>
                    <p>
                        <TextField
                            hintText="Password"

                            />
                    </p>
                    <p>
                        <TextField
                            hintText="Retype Password"

                            />
                    </p>
                    <p>
                        <RaisedButton
                            label="Submit"
                            type="submit"
                            />

                    </p>
                </form>
            </div>
        );
    },

    _handleTouchTap() {
        this.refs.superSecretPasswordDialog.show();
    }

});

module.exports = Main;
