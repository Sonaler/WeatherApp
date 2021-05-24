import React from 'react';

import './Search.css';

class Search extends React.Component {
	state = { term: '' };

	onInputChange = (event) => {
		this.setState({ term: event.target.value });
	};

	onFormSubmit = (event) => {
		event.preventDefault();
		this.props.onSearchSubmit(this.state.term);
	};

	render() {
		return (
			<div className="ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="inline field">
						<label htmlFor="search">Wpisz miasto:</label>
						<input type="text" onChange={this.onInputChange} id="search" value={this.state.term} />
					</div>
				</form>
			</div>
		);
	}
}

export default Search;
