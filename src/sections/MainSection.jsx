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
                            <Card>
                                <h1>Alan Sax</h1>
                                <h4>A Web Portfolio</h4>
                            </Card>
						</div>

						<div className="col-8_xs-12">
							<Card title="HOWDY! I'M ALAN SAX. I DESIGN AND CODE AWESOME APPS." />
						</div>

						<div className="col-6_xs-12">
							<Card
                                image="https://i.imgur.com/qM49peh.png"
                            />
						</div>

						<div className="col-3_xs-12">
                            <Card >
                                <div>
                                    <h2>Check Out My Current Project!</h2>
                                    <div className="image-container">
                                        <img src="https://i.imgur.com/tN5bgzM.png" alt=""/>
                                    </div>
                                </div>
                            </Card>
						</div>

						<div className="col-3_xs-12">
							<Card title="hi" />
						</div>

						<div className="col-4_xs-12">
							<Card title="Web Projects" />
						</div>

						<div className="col-4_xs-12">
							<Card title="Web Design" />
						</div>

						<div className="col-4_xs-12">
                            <Card>

                                <div className="flex-row">
                                    <a href="https://github.com/saxal28" target="_facebook"><img className="icon-link" src="https://www.hyper.no/assets/github-icon-213ce151062f75058d614837499b5855.svg"/></a>
                                    <a href="https://www.instagram.com/saxal28/?hl=en" target="_instagram"><img className="icon-link" src="http://is1.mzstatic.com/image/thumb/Purple117/v4/09/71/76/0971766d-3c1d-9246-1bf0-9d11211e599f/source/1200x630bb.jpg"/></a>
                                    <a href="https://www.linkedin.com/in/alan-sax-576a24b3" target="_linkedin"><img className="icon-link" src="https://lh3.googleusercontent.com/00APBMVQh3yraN704gKCeM63KzeQ-zHUi5wK6E9TjRQ26McyqYBt-zy__4i8GXDAfeys=w300"/></a>
                                </div>

                                <div className="button-row-bottom">
                                    <a href="https://github.com/saxal28/caesar_cipher/raw/master/Resume_Sax_Alan.pdf" className="button">Download Resume</a>
                                </div>

                            </Card>
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