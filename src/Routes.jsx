import React from "react";
import { Route } from 'react-router-dom';
import MainSection from "./sections/MainSection";

export default class Routes extends React.Component {

	render() {
		return (
			<div>
				<Route exact path="/" component={MainSection} />
			</div>
		)
	}
}