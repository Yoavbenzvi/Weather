import React from 'react';
import './App.css';
import TopPart from './components/TopPart';
import DayCard from './components/DayCard';


class App extends React.Component {
	constructor() {
		super()

		this.state = {
			weather: null,
			days: [],
		}
	}

	getWeather = async (city, country) => {
		const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}?id=524901&APPID=e8225be1aa07c8310717e23a670d52f2`)
		.then(response => response.json())
		.then(data => this.setState({
			weather: data
		}))
		this.setDays()
	}

	keToCe = () => {

	}

	setDays = () => {
		const newDays = [];
		for(let i = 0; i < 7; i++) {
			newDays.push([this.keToCe(this.state.weather.list[i].main.temp_max), (this.state.weather.list[i].main.temp_min)])
		}
		this.setState({
			days: newDays
		})

		this.renderDays()
	}

	renderDays = () => {
		const renderedDays = this.state.days.map((item, i) => <DayCard key={i} max={this.state.days[0]} min={this.state.days[1]} />)
		this.setState({
			days: renderedDays
		})
	}

	render() {
		return(
			<div className="container">
				<TopPart getWeather={this.getWeather}/>
				<div className="days">
					{this.state.days}
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