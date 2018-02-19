import React, { Component } from 'react';
import Search from './Search.js';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan500} from 'material-ui/styles/colors';
import BackgroundImage from './assets/bg.jpg';
import Paper from 'material-ui/Paper';


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
		return (
			<div>
				<div className="Mid-container">
					<div id="Mid-search">
						<MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
							<Search />
						</MuiThemeProvider>
					</div>
					<div id="Mid-filter">
					</div>
				</div>
			</div>
		);
	}
}

export default MidContainer;
