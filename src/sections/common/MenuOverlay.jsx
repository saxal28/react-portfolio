import React from 'react';
import {Link} from "react-router-dom";


export default class MenuOverlay extends React.Component {
	render() {

		const { visible, toggleMenu } = this.props;

		return (
			<div>

				{visible &&
					<div className="overlay">
						<Link to="/about-me" className="overlay-link" onClick={() => toggleMenu() }>About Me</Link>
						<Link to="/side-projects" className="overlay-link" onClick={() => toggleMenu() }>Side Projects</Link>
						<Link to="/client-projects" className="overlay-link" onClick={() => toggleMenu() }>Client Projects</Link>
						<Link to="/graphic-design" className="overlay-link" onClick={() => toggleMenu() }>Graphic Design</Link>
					</div>
				}

			</div>
		)
	}
}