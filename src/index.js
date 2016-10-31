import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Tags from './tags';
import Example1 from './example1';
import Example2 from './example2';
import Example3 from './example3';
import Example4 from './example4';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


ReactDOM.render( <MuiThemeProvider><Example1 /></MuiThemeProvider>, document.querySelector("#example1"));
ReactDOM.render( <MuiThemeProvider><Example2 /></MuiThemeProvider>, document.querySelector("#example2"));
ReactDOM.render( <MuiThemeProvider><Example3 /></MuiThemeProvider>, document.querySelector("#example3"));
ReactDOM.render( <MuiThemeProvider><Example4 /></MuiThemeProvider>, document.querySelector("#example4"));
