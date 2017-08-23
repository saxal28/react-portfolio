import React from "react";
import Section from "./common/Section";
import AvatarCard from "./common/AvatarCard";
import {Projects} from "../data/Projects";

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

				{/*<div className="button-row-bottom">*/}
					{/*<button className={`${isActive(1)}`} onClick={() => setActiveSlide(1)}>Bio</button>*/}
					{/*<button className={`${isActive(2)}`} onClick={() => setActiveSlide(2)}>Hobbies</button>*/}
					{/*<button className={`${isActive(3)}`} onClick={() => setActiveSlide(3)}>Projects</button>*/}
				{/*</div>*/}
			</Section>
		)
	}
}