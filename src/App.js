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

	kaToCeHigh = (deg) => {
		const celsius = Math.ceil(deg-273.15);
		return celsius;
	}

	kaToCeLow = (deg) => {
		const celsius = Math.floor(deg-273.15);
		return celsius;
	}

	getWeather = async (city, country) => {
		await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}?id=524901&APPID=e8225be1aa07c8310717e23a670d52f2`)
		.then(response => response.json())
		.then(data => this.setState({
			weather: data
		}))
		this.setDays()
	}

	setDays = () => {
		const newDays = [];
		for(let i = 0; i < 8; i++) {
			newDays.push([
				this.kaToCeHigh(this.state.weather.list[i].main.temp_max), 
				this.kaToCeLow(this.state.weather.list[i].main.temp_min), 
				this.state.weather.list[i].weather[0].description,
				this.state.weather.list[i].dt_txt
			])
		}
		console.log(newDays)
		this.setState({
			days: newDays
		})

		this.renderDays()
	}

	renderDays = () => {
		const renderedDays = this.state.days.map((item, i) => 
			<DayCard 
				key={i} 
				max={this.state.days[i][0]} 
				min={this.state.days[i][1]} 
				icon={this.state.days[i][2]} 
				time={this.state.days[i][3]} 
			/>)
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