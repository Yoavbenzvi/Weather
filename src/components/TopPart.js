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
			const day = today.getDate().toString().length === 1 ? "0" + today.getDate() : today.getDate();
			const tempMonth = today.getMonth()+1;
			const month = tempMonth.toString().length === 1 ? "0" + tempMonth : tempMonth; 
			const date = day+'/'+month+'/'+today.getFullYear();
			return date;
		}

		getTime = () => {
			const d = new Date();
			const h = d.getHours().toString().length === 1 ? "0" + d.getHours() : d.getHours();
			const m = d.getMinutes().toString().length === 1 ? "0" + d.getMinutes() : d.getMinutes();
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
						<p> {this.getTime()}</p>
					</div>
				</div>
			)
		}
	}

export default TopPart;