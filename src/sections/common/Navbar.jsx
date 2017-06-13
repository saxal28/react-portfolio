import React from 'react';
import MenuOverlay from "./MenuOverlay";

export default class Navbar extends React.Component {

	state = { visible: false }

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
					<i onClick={() => toggleMenuOverlay()} className="fa fa-bars" aria-hidden="true"></i>
				</div>
				<MenuOverlay visible={visible} toggleMenu={toggleMenuOverlay}/>
			</div>
		)
	}
}