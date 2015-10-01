import React from "react";
import { Paper, RaisedButton, TextField } from "material-ui"
import { ThemeManager, LightRawTheme, Colors} from "material-ui/lib/styles"

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
