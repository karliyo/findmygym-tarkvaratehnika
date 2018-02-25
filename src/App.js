import React, { Component } from 'react';
import './App.css';
import './components/SearchBox.css';
import Map from './components/Map.js';
import SearchBar from './components/SearchBar.js';
import Header from './components/Header.js';

const bgColors = { "Default": "#81b71a",
                    "Blue": "#00B1E1",
                    "Cyan": "#37BC9B",
                    "Green": "#8CC152",
                    "Red": "#E9573F",
                    "Yellow": "#FFCC00",
};

const initial_center = {
    lat: 53.436,
    lng: 24.547
};

class App extends Component {
    constructor(props) {
        super(props); //props will get logged.
        this.state = {
			center: initial_center,
        }
    }

    componentDidMount() {
        this.setState ({
            center: this.result.getAddress()
		})
    }

	render() {
        console.log("Current map center:" + this.state.center.lat);
		return (
			<div className="wrapper">
				<Header />

				<div className="mid-div">
					<div className="search">
						<SearchBar
                            ref={result => {
                                this.result = result;
                            }}
						/>
					</div>
				</div>
				<div className="footer">
					<Map
						center={this.state.center}
					/>
				</div>
			</div>
    	);

	}
}

export default App;
