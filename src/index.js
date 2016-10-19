import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Tags from './tags';
import Example1 from './example1';
import Example2 from './example2';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


ReactDOM.render( <MuiThemeProvider><Example1 /></MuiThemeProvider>, document.querySelector("#example1"));
ReactDOM.render( <MuiThemeProvider><Example2 /></MuiThemeProvider>, document.querySelector("#example2"));
