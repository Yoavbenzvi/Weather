import React from 'react';
import './TopPart.css'

	class TopPart extends React.Component {
		constructor() {
			super()

			this.state = {
				time: this.getTime(),
				city: "",
				country: "",
			}
		}

		componentDidMount() {
			this.timer = setInterval(
				() => {
					this.setState({
						time: this.getTime()
					})
				}, 30000
			)
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

		changeCity = (e) => {
			this.setState({
				city: e.target.value
			})
		}

		changeCountry = (e) => {
			this.setState({
				country: e.target.value
			})
		}

		handleClick = (city, country) => {
			if(city !== "" && country !== "") {
				this.props.getWeather(city, country)
			}
		}

		render() {
			return(
				<div className="box">
					<div className="date">
						<p>{this.getDate()}</p>
					</div>
					<div className="time">
						<p> {this.state.time}</p>
					</div>
					<div>
						<label>City:</label>
							<input value={this.state.city} onChange={(e) => this.changeCity(e)} ></input>
						<label>Country:</label>
							<input value={this.state.country} onChange={(e) => this.changeCountry(e)} ></input>
						<button onClick={() => this.handleClick(this.state.city, this.state.country)} >Get Forecast</button>
					</div>
				</div>
			)
		}
	}

export default TopPart;