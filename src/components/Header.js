import React, { Component } from 'react';
import logo from './assets/logo.png';
import Navbar from './Navbar.js'

class Header extends Component {
	render() {
	    return (
	        <div className="Header">
	            <div className="Header-left">
	                <img id="logo" src={logo} alt="logo" />
	            </div>

	            <div className="Header-center">
	            </div>

	            <div className="Header-nav-right">
					<Navbar />
	            </div>
	        </div>
	    );
  }
}

export default Header;
