import React from 'react';
import './DayCard.css';

class DayCard extends React.Component {

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

	cutTime = (string) => {
		return string.substring(11, 16);
	}

	render() {
		return(
			<div className="card">
				<div className={this.getIcon(this.props.icon)}></div>
				<div>
					{this.cutTime(this.props.time)}
				</div>
				<div>
					<span className="max">
						{this.props.max}°
					</span> 
					/ 
					<span className="min">
						{this.props.min}°
					</span>
				</div>
			</div>
		)
	}
}

export default DayCard;