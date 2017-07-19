import React from 'react';
import MenuOverlay from "./MenuOverlay";
import {NavLink} from "react-router-dom";

export default class Navbar extends React.Component {

	state = { visible: true }

	toggleMenuOverlay() {
		this.setState({visible: !this.state.visible})
		console.log('called')
	}

	render() {

		const {visible} = this.state;
		const toggleMenuOverlay = this.toggleMenuOverlay.bind(this)

		return (
			<div className="menu">
				<div className="navbar">
					<NavLink className="nav-link" to="/" activeClassName="active" exact>Home</NavLink>
					<NavLink className="nav-link" to="/about">About</NavLink>
					<NavLink className="nav-link" to="/projects">Projects</NavLink>
					<NavLink className="nav-link" to="/contact">Contact</NavLink>
					{/*<i onClick={() => toggleMenuOverlay()} className="fa fa-bars" aria-hidden="true"></i>*/}
				</div>
				{/*<MenuOverlay visible={visible} toggleMenu={toggleMenuOverlay}/>*/}
			</div>
		)
	}
}