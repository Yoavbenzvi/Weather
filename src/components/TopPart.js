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
		getTime2 = () => {
			const d = new Date();
			const h = d.getHours().length === 1 ? "0" + d.getHours() : d.getHours();
			const m = d.getMinutes().length === 1 ? "0" + d.getMinutes() : d.getMinutes();
			const time = h + ":" + m;
			return time;
		}

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
						<p> {this.getTime2()}</p>
					</div>
				</div>
			)
		}
	}

export default TopPart;