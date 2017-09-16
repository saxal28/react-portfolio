import React from 'react'
import Section from "./common/Section";
import {Card} from "./common/Card";
import {Warning} from "./common/Warning";

export default class MainSection extends React.Component {

	render() {

		// const notMobile = isMobile() ? "true" : 'false';

		return (
			<div className="website-container">

				<Section>

					<Warning text="Currently Rebuilding My Portfolio! Stay Tuned!"/>

					<div className="grid">

						<div className="col-4_sm-12">
							<Card title="Alan Sax" subtitle="Subtitle"/>
						</div>

						<div className="col-8_sm-12">
							<Card title="HOWDY! I'M ALAN SAX. I DESIGN AND CODE AWESOME APPS." />
						</div>

						<div className="col-7_sm-12">
							<Card title="Check Out My Latest Project" />
						</div>

						<div className="col-5_sm-12">
							<Card title="hi" />
						</div>

						<div className="col-4_sm-12">
							<Card title="Web Projects" />
						</div>

						<div className="col-4_sm-12">
							<Card title="Web Design" />
						</div>

						<div className="col-4_sm-12">
							<Card title="Download Resume" />
						</div>

						{/*<div className="pattern">*/}
							{/*<video autoPlay loop poster="//s3-us-west-2.amazonaws.com/s.cdpn.io/68939/wppost.jpg">*/}
								{/*<source src="//s3-us-west-2.amazonaws.com/s.cdpn.io/68939/vidwp.mp4" type="video/mp4"/>*/}
							{/*</video>*/}

						{/*</div>*/}

					</div>

				</Section>

			</div>
		)
	}
}