import React from 'react';
import './App.css';
import { days } from './components/days';
import TopPart from './components/TopPart';
import DayCard from './components/DayCard';


class App extends React.Component {

	renderDays = () => {
		const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
		const renderedDays = days.map((item, i) => <DayCard className="DayCard" day={dayNames[item.id]} key={i} max={item.max} min={item.min} />)
		return renderedDays;
	}

	render() {
		return(
			<div className="container">
				<TopPart />
				<div className="days">
					{this.renderDays()}
				</div>
			</div>
		)
	}
}

export default App;