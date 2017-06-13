import React from "react";
import MainSection from "./sections/MainSection";

import { Route } from 'react-router-dom';
import SideProjectsSection from "./sections/SideProjectsSection";
import AboutMeSection from "./sections/AboutMeSection";
import ClientProjectsSection from "./sections/ClientProjectsSection";
import GraphicDesignSection from "./sections/GraphicDesignSection";

export default class Routes extends React.Component {

	render() {
		return (
			<div>
				<Route exact path="/" component={MainSection} />
				<Route path="/about-me" component={AboutMeSection}/>
				<Route path="/side-projects" component={SideProjectsSection}/>
				<Route path="/client-projects" component={ClientProjectsSection}/>
				<Route path="/graphic-design" component={GraphicDesignSection} />
			</div>
		)
	}
}