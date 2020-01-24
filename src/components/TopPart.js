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
			const cityName = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
			this.setState({
				city: cityName
			})
		}

		changeCountry = (e) => {
			const countryName = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
			this.setState({
				country: countryName
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
					<div className="clock">
						<p>{this.getDate()}</p>
						<p>{this.state.time}</p>
					</div>
					<div className="input">
						<input placeholder="city" value={this.state.city} onChange={(e) => this.changeCity(e)} ></input>
						<input placeholder="country" value={this.state.country} onChange={(e) => this.changeCountry(e)} ></input>
						<button onClick={() => this.handleClick(this.state.city, this.state.country)} >Get Forecast</button>
					</div>
				</div>
			)
		}
	}

export default TopPart;