import React, { Component } from 'react';
import './App.css';
import './components/SearchBox.css';
import Map from './components/Map';
import SearchBar from './components/SearchBar';
import Header from './components/Header.js';
import gymsMockJson from './mock/gyms.json';
import ModalDialog from './components/ModalDialog';
import Modal, {closeStyle} from 'simple-react-modal'


// const bgColors = { "Default": "#81b71a",
//                     "Blue": "#00B1E1",
//                     "Cyan": "#37BC9B",
//                     "Green": "#8CC152",
//                     "Red": "#E9573F",
//                     "Yellow": "#FFCC00",
// };

const initial_center = {lat: 59.4270203, lng: 24.714007};

const initial_zoom = 10;


class App extends Component {
    constructor(props) {
        super(props); //props will get logged.
        this.state = {
			center: initial_center,
            defaultZoom: initial_zoom
        };
        this.updateState = this.updateState.bind(this);
        this.handler = this.handler.bind(this);
    }

    updateState() {
        this.setState({center: this.result.getAddress()});
    }

    // componentWillMount() {
    //     this.setState({
    //         markers: []
    //     })
    // }
    //
    // componentDidMount() {
    //     this.setState ({
    //         center: this.result.getAddress()
		// });
    //
    //     commented part is for testing with many clusters
    //     https://tomchentw.github.io/react-google-maps/#markerclusterer
    //     const url = ['https://gist.githubusercontent.com/farrrr/dfda7dd7fccfec5474d3/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json'].join("");
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => {
    //                 this.setState({
    //                     markers: data.gyms
    //             });
    //     });
    //     this.setState({
    //         markers: gymsMockJson.gyms
    //     })
    // }

    handler(new_center) {
        this.updateState();
        // this.setState({
        //     center: new_center
        // })
        console.log("Updated map center state")
    }

	render() {
		return (
			<div className="wrapper">
				<Header />
				<div className="mid-div">
					<div className="search">
						<SearchBar handler = {this.handler}
                                   ref={result => {
                                       this.result = result;
                                   }}
                                   />
					</div>
				</div>
			</div>
    	);

	}
}

export default App;
