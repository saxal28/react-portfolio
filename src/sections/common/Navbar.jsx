import React from 'react';
import MenuOverlay from "./MenuOverlay";
import {NavLink} from "react-router-dom";
import {isMobile} from "../../util/index";

export default class Navbar extends React.Component {

	render() {

		const {showNav, toggleNav} = this.props
		const navStatus = showNav ? "open" : "close"

        const handleClick = isMobile() ? () => toggleNav() : () => {}

		return (
			<div className={`menu ${navStatus}`}>
				<div className="navbar">
					<NavLink onClick={handleClick} className="nav-link" to="/" activeClassName="active" exact>Home</NavLink>
					<NavLink onClick={handleClick} className="nav-link" to="/about">About</NavLink>
					<NavLink onClick={handleClick} className="nav-link" to="/projects">Projects</NavLink>
					<NavLink onClick={handleClick} className="nav-link" to="/contact">Contact</NavLink>
				</div>
			</div>
		)
	}
}