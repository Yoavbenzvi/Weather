import React from 'react';
import './DayCard.css';

class DayCard extends React.Component {

	// randomIcon = () => {
	// 	const icons = ["fas fa-cloud", "fas fa-cloud-showers-heavy", "fas fa-cloud-sun", "fas fa-sun", "fas fa-snowflake"]
	// 	const number = Math.floor(Math.random() * 5);
	// 	return icons[number];
	// }

	// <i className={this.randomIcon()}></i>
	// clear, rain, clouds, broken clouds
	getIcon = (text) => {
		if(text.includes("clear")) {
			return "fas fa-sun";
		} else if(text.includes("rain")) {
			return "fas fa-cloud-showers-heavy";
		} else if(text.includes("broken")) {
			return "fas fa-cloud-sun";
		} else if(text.includes("snow")) {
			return "fas fa-snowflake";
		} else if(text.includes("clouds")) {
			return "fas fa-cloud";
		} else {
			return "fas fa-cloud";
		}
	}

	render() {
		return(
			<div className="card">
				<h4>{this.props.day}</h4>
				<div className={this.getIcon(this.props.icon)}></div>
				<p><span className="max">{this.props.max}°</span> / <span className="min">{this.props.min}°</span></p>
			</div>
		)
	}
}

export default DayCard;