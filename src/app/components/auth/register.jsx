import React from "react";
import { RaisedButton, TextField } from "material-ui"
import { ThemeManager, LightRawTheme, Colors} from "material-ui/lib/styles"
import Constants from "../../constants.js"

export default React.createClass({

    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getInitialState () {
        return {
            muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
        };
    },

    getChildContext() {
        return {
            muiTheme: this.state.muiTheme
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
                <form action={Constants.API.Register} method="post">
                    <p>
                        <TextField
                            hintText="Login"
                            />
                    </p>
                    <p>
                        <TextField
                            hintText="Password"
                            type="password"
                            />
                    </p>
                    <p>
                        <TextField
                            hintText="Retype Password"
                            type="password"
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
