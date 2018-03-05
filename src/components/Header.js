import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import logo from './assets/logo.png';

class Header extends Component {
	render() {
	    return (
			<div className="header">
	            {/*<img id="logo" src={logo} alt="logo" />*/}
	            <div id="header-center">
	            </div>
	            <nav id="header-nav-right">
					<ul>
						<li><Link to="/">Home</Link></li>
                        <li><Link to="/results">Map</Link></li>
                        {/*<li><a href="#">News</a></li>*/}
                        {/*<li><a href="#">Contact</a></li>*/}
					</ul>
	            </nav>
			</div>
	    );
  }
}

export default Header;
