import React, { Component } from 'react';
import './App.css';
import './components/SearchBox.css';
import Map from './components/Map.js';
import SearchBar from './components/SearchBar.js';
import Header from './components/Header.js';

// const bgColors = { "Default": "#81b71a",
//                     "Blue": "#00B1E1",
//                     "Cyan": "#37BC9B",
//                     "Green": "#8CC152",
//                     "Red": "#E9573F",
//                     "Yellow": "#FFCC00",
// };

const initial_center = {
    lat: 40.6439203,
    lng: -74.014007
};


class App extends Component {
    constructor(props) {
        super(props); //props will get logged.
        this.state = {
			center: initial_center,
        };
        this.updateState = this.updateState.bind(this);
        this.handler = this.handler.bind(this);
    }

    updateState() {
        this.setState({center: this.result.getAddress()});
    }

    componentDidMount() {
        // this.setState ({
         //    center: this.result.getAddress()
		// });
    }

    handler(new_center) {
        this.updateState();
        // this.setState({
        //     center: new_center
        // })
        console.log("Updated map center state")
    }

	render() {
        console.log("Current map center in App.js:" + this.state.center.lat + ", " + this.state.center.lng);
		return (
			<div className="wrapper">
				<Header />
				<div className="mid-div">
					<div className="search">
						<SearchBar
                            handler = {this.handler}
                            ref={result => {
                                this.result = result;
                            }}
						/>
					</div>
				</div>
				<div className="footer">
					<Map defaultCenter={{lat:this.state.center.lat, lng:this.state.center.lng}} center={{lat:this.state.center.lat, lng:this.state.center.lng}}/>
				</div>
			</div>
    	);

	}
}

export default App;
