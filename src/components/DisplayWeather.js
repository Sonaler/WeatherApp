import React from 'react';
import './DisplayWeather.css';

const DisplayWeather = (props) => {
	const {
		temperature,
		weatherDesc,
		windSpeed,
		windDir,
		pressure,
		cloudCover,
		feelsLike,
		name,
		country,
		localtime,
		timezone_id
	} = props.weather;

	function icon() {
		if (weatherDesc[0] === 'Sunny') return 'sun';
		if (weatherDesc[0] === 'Partly cloudy') return ' teal cloud';
		if (weatherDesc[0] === 'Light Rain Shower') return 'grey cloud';
		if (weatherDesc[0] === 'Light Rain') return 'grey cloud';
	}
	// const cos = Array(props.weather);
	// const mapa = cos.map((value, index) => {
	// 	return <div>Temperatura: {value.temperature}</div>;
	// });
	// return <div>{mapa}</div>;

	// const bless = Object.entries(props.weather.weather).map((value) => {
	// 	// if (value[0] === 'temperature' || value[0] === 'cloudcover' || value[0] === 'feelslike')
	// 	return (
	// 		<div>
	// 			{value[0]}: {value[1]}
	// 		</div>
	// 	);
	// });

	// console.log(bless);
	// return <div>{bless}</div>;
	if (props.weather.weather.length === 0) {
		return <div>Podaj miasto którego pogodę byś chciał/a dostać</div>;
	}

	return (
		<React.Fragment>
			<div className="ui segment">
				<table>
					<div>
						<tr>
							<td>Aktualna temperatura dla:</td>
							<td>
								{name}, {country}
							</td>
						</tr>
					</div>
					<div>
						<tr>
							<td>Mierzone o:</td>
							<td>
								{localtime}, {timezone_id}
							</td>
						</tr>
					</div>
					<div>
						<tr>
							<td>Temperatura:</td>
							<td>
								{temperature}*C, {weatherDesc} <i className={`icon-left ${icon()} icon`} />
							</td>
						</tr>
					</div>
					<div>
						<tr>
							<td>Temperatura odczuwalna:</td>
							<td>{feelsLike}</td>
						</tr>
					</div>
					<div>
						<tr>
							<td>Zachmurzenie:</td>
							<td>{cloudCover}%</td>
						</tr>
					</div>
					<div>
						<tr>
							<td>Ciśnienie:</td>
							<td>{pressure} hPa</td>
						</tr>
					</div>
					<div>
						<tr>
							<td>Wiatr z prędkością</td>
							<td>
								{windSpeed} km/h w kierunku {windDir}
							</td>
						</tr>
					</div>
				</table>
			</div>
		</React.Fragment>
	);
};

export default DisplayWeather;
