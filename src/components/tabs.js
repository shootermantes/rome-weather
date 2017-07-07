import React, { Component } from 'react';
import { Link } from 'react-router';

import Current from './current';
import FiveDay from './fiveday';

export default class Tabs extends Component {
	render() {
		return (
			<div className="tabs-container">
				<ul className="tabs">
					<Link to='/' ><li className="tab-forecast">Forecast</li></Link>
					<Link to='precip' ><li className="tab-Precip">Precipication</li></Link>					
				</ul>
				{this.props.children}
			</div>
		);
	}
}
