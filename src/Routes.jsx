import React from "react";
import { Route } from 'react-router-dom';
import MainSection from "./sections/MainSection";
import {AboutSection} from "./sections/AboutSection";
import {ProjectsSection} from "./sections/ProjectsSection";
import {ContactSection} from "./sections/ContactSection";

export default class Routes extends React.Component {

	render() {
		return (
			<div style={{flex: "1"}}>
				<Route exact path="/" component={MainSection} />
				<Route path="/about" component={AboutSection} />
				<Route path="/projects" component={ProjectsSection} />
				<Route path="/design" component={ContactSection} />
			</div>
		)
	}
}