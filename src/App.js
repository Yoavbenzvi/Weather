import React from 'react';
import './App.css';
import { days } from './components/days';
import TopPart from './components/TopPart';
import DayCard from './components/DayCard';


class App extends React.Component {

	render() {
		return(
			<div className="container">
				<TopPart />
				<div>
					
				</div>
			</div>
		)
	}
}

export default App;