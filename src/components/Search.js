import React, { Component } from 'react';
import SearchBar from 'material-ui-search-bar'

// Material Search Bar
// https://github.com/TeamWertarbyte/material-ui-search-bar
class Search extends Component {
  	render() {
		return(
		<SearchBar
			hintText='Sisesta oma asukoht'
			onChange = {() => console.log('onChange')}
			onRequestSearch={() => console.log('onRequestSearch')}
			style={{
				marginLeft: '15px',
				margin: '0 auto',
				maxWidth: 800
			}}
		/>
	)	;
  	}
}

export default Search;
