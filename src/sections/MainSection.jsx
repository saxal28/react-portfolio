import React from 'react'
import Section from "./common/Section";
// import {isMobile} from "../util";
import {AboutSection} from "./AboutSection";
import {ProjectsSection} from "./ProjectsSection";
import {ContactSection} from "./ContactSection";

export default class MainSection extends React.Component {

	render() {

		// const notMobile = isMobile() ? "true" : 'false';

		return (
			<div className="website-container">

				<Section
					title="Alan Sax"
				    body="A Web Portfolio"
				    main
				/>

				{/*<AboutSection/>*/}
				{/*<ProjectsSection/>*/}
				{/*<ContactSection/>*/}

			</div>
		)
	}
}