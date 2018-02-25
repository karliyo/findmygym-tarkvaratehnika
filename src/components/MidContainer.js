import React, { Component } from 'react';
import '../App.css';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan500} from 'material-ui/styles/colors';

class MidContainer extends Component {
	render() {
		const muiTheme = getMuiTheme({
			palette: {
				textColor: cyan500,
			},
			appBar: {
				height: 50,
			},
		});
		return (''
		);
	}
}

export default MidContainer;
