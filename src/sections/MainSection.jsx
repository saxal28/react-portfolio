import React from 'react'
import Section from "./common/Section";
// import {isMobile} from "../util";
import {AboutSection} from "./AboutSection";

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

				<AboutSection/>

			</div>
		)
	}
}