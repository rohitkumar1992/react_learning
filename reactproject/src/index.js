import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';
class MainContainer extends React.Component{
	render() {
		return(
			<Router>
				<App />
			</Router>
		)
	}
}

ReactDOM.render(
	<MainContainer />,
	document.getElementById('root')
);
