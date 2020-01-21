import React from 'react';
import './TopPart.css'

	class TopPart extends React.Component {

		getLocation = () => {
			const cutPoint = Intl.DateTimeFormat().resolvedOptions().timeZone.indexOf("/");
			const getLocation = Intl.DateTimeFormat().resolvedOptions().timeZone.substring(cutPoint+1);
			return getLocation;
		}	

		getDate = () => { 
			const today = new Date();
			const date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
			return date;
		}

		getTime = () => {
			const now = new Date();
			const time = now.getHours() + ":" + now.getMinutes()
			return time;
		}


//asdasdasdasdasdasdasdasd
		render() {
			return(
				<div className="container">
					<div className="location">
						<p>{this.getLocation()}</p>
					</div>
					<div className="date">
						<p>{this.getDate()}</p>
					</div>
					<div className="time">
						<p> {this.getTime()}</p>
					</div>
				</div>
			)
		}
	}

export default TopPart;