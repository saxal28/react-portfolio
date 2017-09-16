import React from 'react'
import Section from "./common/Section";
import {Card} from "./common/Card";
import {Warning} from "./common/Warning";

export default class MainSection extends React.Component {

	render() {

        const navigateTo = this.props.router

		return (
			<div className="website-container">

				<Section>

					<Warning text="Currently Rebuilding My Portfolio! Stay Tuned!"/>

					<div className="grid">

						<div className="col-4_xs-12">
							<Card image="https://i.imgur.com/uWaQx6B.jpg" subtitle="Alan"/>
						</div>

						<div className="col-8_xs-12">
							<Card title="HOWDY! I'M ALAN SAX. I DESIGN AND CODE AWESOME APPS." />
						</div>

						<div className="col-6_xs-12">
							<Card title="Check Out My Latest Project" />
						</div>

						<div className="col-3_xs-12">
							<Card subtitle="hi" />
						</div>

						<div className="col-3_xs-12">
							<Card subtitle="hi" />
						</div>

						<div className="col-4_xs-12">
							<Card subtitle="Web Projects" />
						</div>

						<div className="col-4_xs-12">
							<Card subtitle="Web Design" />
						</div>

						<div className="col-4_xs-12">
							<Card subtitle="Download Resume" />
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