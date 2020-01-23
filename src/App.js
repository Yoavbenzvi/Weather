import React from 'react';
import './App.css';
import TopPart from './components/TopPart';
import DayCard from './components/DayCard';


class App extends React.Component {
	constructor() {
		super()

		this.state = {
			weather: null,
		}
	}

	getWeather = (city, country) => {
		fetch(`'http://api.openweathermap.org/data/2.5/forecast?q=berlin,%20germany?id=524901&APPID=e8225be1aa07c8310717e23a670d52f2'`)
		.then(response => response.json())
		.then(data => this.setState({
			weather: data
		}))

	}

	render() {
		return(
			<div className="container">
				<TopPart getWeather={this.getWeather}/>
				<div className="days">
				</div>
			</div>
		)
	}
}

export default App;

	// renderDays = () => {
	// 	const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
	// 	const renderedDays = days.map((item, i) => <DayCard className="DayCard" day={dayNames[item.id]} key={i} max={item.max} min={item.min} />)
	// 	return renderedDays;
	// }