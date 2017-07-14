import React from "react";
import { Route } from 'react-router-dom';
import {Home} from "./sections/Home";

export default class Routes extends React.Component {

	render() {
		return (
			<div>
				<Route exact path="/" component={Home} />
			</div>
		)
	}
}