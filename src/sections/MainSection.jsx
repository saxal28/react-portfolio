import React from 'react'
import Section from "./common/Section";
import {Card} from "./common/Card";
import {highlightText} from "../util/index";

const clickProject = () => 	window.open("http://www.happilyeverafterstl.com/#/")

export default class MainSection extends React.Component {


	render() {

        const navigateTo = this.props.router

		return (
			<div className="website-container">

				<Section>

					<div className="grid">

						<div className="col-4_sm-12">
                            <Card >
                                <h1>Alan Sax</h1>
                                <h2>A Web Portfolio</h2>
                            </Card>
						</div>

						<div className="col-8_sm-12">
							<Card title="HOWDY! I'M ALAN SAX. I DESIGN AND CODE AWESOME APPS." />
						</div>

                        <div className="col-3_sm-0_xs-0">
                            <Card image="https://cmeimg-a.akamaihd.net/640/cme/cuteness_data/s3fs-public/diy_blog/Cuteness-Interviews-Doug-The-Pug_0.jpg" />
                        </div>

						<div className="col-6_sm-12">
							<Card
                                image="https://i.imgur.com/qM49peh.png"
                                onClick={() => clickProject()}
                            />
						</div>

						<div className="col-3_sm-0_xs-0">
                            <Card >
                                <div>
                                    <h2>Check Out My Current Project!</h2>
                                    <div className="image-container">
                                        <img src="https://i.imgur.com/tN5bgzM.png" alt=""/>
                                    </div>
                                </div>
                            </Card>
						</div>


						<div className="col-4_sm-12">
							<Card title="Web Projects" />
						</div>

						<div className="col-4_sm-12">
							<Card title="Web Design" />
						</div>

						<div className="col-4_sm-12">
                            <Card>

                                <div className="flex-row">
                                    <a href="https://github.com/saxal28" target="_facebook"><img className="icon-link" src="https://i.imgur.com/6hafd80.png"/></a>
                                    <a href="https://www.instagram.com/saxal28/?hl=en" target="_instagram"><img className="icon-link" src="https://i.imgur.com/DCeJmH4.png"/></a>
                                    <a href="https://www.linkedin.com/in/alan-sax-576a24b3" target="_linkedin"><img className="icon-link" src="https://i.imgur.com/0XgD7Cq.png"/></a>
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