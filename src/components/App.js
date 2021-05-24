import React from 'react';

import axios from 'axios';
import Search from './Search';
import DisplayWeather from './DisplayWeather';

import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			weather: [],
			weatherLoc: [],
			temperature: '',
			weatherDesc: '',
			windSpeed: '',
			windDir: '',
			windDegree: '',
			pressure: '',
			cloudCover: '',
			feelsLike: '',
			name: '',
			country: '',
			localtime: '',
			timezone_id: ''
		};
	}
	onSearchSubmit = (term) => {
		axios
			.get('http://api.weatherstack.com/current?access_key=4c8d46a9dc6072b62da8a7c1ae79149a', {
				params: {
					query: term,
					units: 'm'
				}
			})
			.then((result) => {
				var curr = result.data.current;
				var loc = result.data.location;
				this.setState({
					weather: curr,
					weatherLoc: loc,
					temperature: curr.temperature,
					weatherDesc: curr.weather_descriptions,
					windSpeed: curr.wind_speed,
					windDir: curr.wind_dir,
					pressure: curr.pressure,
					cloudCover: curr.cloudcover,
					feelsLike: curr.feelslike,
					name: loc.name,
					country: loc.country,
					localtime: loc.localtime,
					timezone_id: loc.timezone_id
				});
			})
			.catch((error) => {
				window.alert('Nie ma takiego miasta, podaj inne.');
				console.log(error.result);
			});
	};

	render() {
		return (
			<div className="ui container segment" style={{ marginTop: '60px' }}>
				<Search onSearchSubmit={this.onSearchSubmit} />
				<DisplayWeather weather={this.state} />
			</div>
		);
	}
}

export default App;
