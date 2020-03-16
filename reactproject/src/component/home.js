import React, {Component} from 'react'
import {BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';

class Home extends Component {
	render() {
		return(
			<div>
				<h1>Home</h1>
				<ul>
					<li>Home</li>
				</ul>
			</div>
		)
	}
}
export default Home;
