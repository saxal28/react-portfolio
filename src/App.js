import React from "react";
import Routes from "./Routes";
import Navbar from "./sections/common/Navbar";
import {isMobile} from "./util/index";
import {Warning} from "./sections/common/Warning";

export default class App extends React.Component {

	state = { showNav: true }

	componentWillMount() {

		if(isMobile()) this.setState({showNav: false})

	}

	toggleNav() {

		const {showNav} = this.state
		this.setState({showNav: !showNav})

		console.log({showNav})

	}

	render() {

		const toggleNav = this.toggleNav.bind(this)
		const {showNav} = this.state

		const iconPosition = showNav ? "navbar-open" : "navbar-close";

		return (
			<div style={{display: "flex"}}>

				<Warning text="Currently Rebuilding My Portfolio! Stay Tuned!"/>

				<Navbar showNav={showNav} toggleNav={toggleNav} />
				<i onClick={toggleNav} className={`fa fa-bars ${iconPosition}`} aria-hidden="true"/>
				<Routes/>

			</div>
		)
	}
}