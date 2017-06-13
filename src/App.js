import React from "react";
import Routes from "./Routes";
import Navbar from "./sections/common/Navbar";

export default class App extends React.Component {

	render() {
		return (
			<div>
				<Navbar/>
				<Routes/>
			</div>
		)
	}
}