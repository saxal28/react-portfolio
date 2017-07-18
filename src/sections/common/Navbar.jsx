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
					<a className="nav-link" to="/" activeClassName="active">Home</a>
					<a className="nav-link" to="/about">About</a>
					<a className="nav-link" to="/projects">Projects</a>
					<a className="nav-link" to="/contact">Contact</a>
					{/*<i onClick={() => toggleMenuOverlay()} className="fa fa-bars" aria-hidden="true"></i>*/}
				</div>
				{/*<MenuOverlay visible={visible} toggleMenu={toggleMenuOverlay}/>*/}
			</div>
		)
	}
}