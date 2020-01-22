import React from 'react';
import './DayCard.css';

class DayCard extends React.Component {

	randomIcon = () => {
		const icons = ["fas fa-cloud", "fas fa-cloud-showers-heavy", "fas fa-cloud-sun", "fas fa-sun", "fas fa-snowflake"]
		const number = Math.floor(Math.random() * 5);
		return icons[number];
	}

	render() {
		return(
			<div className="card">
				<h4>{this.props.day}</h4>
				<i className={this.randomIcon()}></i>
				<p><span className="max">{this.props.max}°</span> / <span className="min">{this.props.min}°</span></p>
			</div>
		)
	}
}

export default DayCard;