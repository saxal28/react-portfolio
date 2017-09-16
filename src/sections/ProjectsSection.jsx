import React from "react";
import Section from "./common/Section";
import AvatarCard from "./common/AvatarCard";
import {Projects} from "../data/Projects";
import {Card} from "./common/Card";

export class ProjectsSection extends React.Component {

	state = { activeSlide: 1 }

	setActiveSlide(num) {
		this.setState({activeSlide: num})
	}

	isActive(num) {
		return this.state.activeSlide === num ? "active" : ""
	}

	render() {

		const {activeSlide} = this.state;
		const isActive = this.isActive.bind(this)
		const setActiveSlide = this.setActiveSlide.bind(this)

		console.log("about section active slide", activeSlide)

		return (

			<Section main>

				{/*// TODO -- possibly pull out into seperate component if used elsewhere*/}
				{/*TODO -- going to pull make sections of 3.*/}

				{activeSlide === 1 && <div className="gallery-row">

					{Projects.map(project => {
						return (
							<AvatarCard
								image={project.image}
								imageTitle={project.imageTitle}
								centered
								animation="slideInLeft"
							/>
						)
					})}
				</div>}

                {activeSlide === 2 && <div className="gallery-row">

					<AvatarCard
						image="https://i.imgur.com/PhwLGWg.png"
						imageTitle="Happily Ever After STL"
						centered
						animation="slideInLeft"
						onClick=""
					/>

				</div>}

                {activeSlide === 3 && <div className="gallery-row">

					<Card>

						<div className="image-container">
							<h2>Smart Strength</h2>
							<img src="https://i.imgur.com/UhqdoF4.png" alt=""/>
							<p>A React Native powered weight-training app with predictive capabilities. Smart calculations based on weekly personal strength records. Automatic weight tracking. Beginner programs.</p>

						</div>

					</Card>

				</div>}



				<div className="button-row-bottom">
					<button className={`${isActive(1)}`} onClick={() => setActiveSlide(1)}>Archived</button>
					<button className={`${isActive(2)}`} onClick={() => setActiveSlide(2)}>In Progress</button>
					<button className={`${isActive(3)}`} onClick={() => setActiveSlide(3)}>Future</button>
				</div>

			</Section>
		)
	}
}