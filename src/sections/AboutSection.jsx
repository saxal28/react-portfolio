import React from "react";
import Section from "./common/Section";
import AvatarCard from "./common/AvatarCard";
import {highlightText} from "../util/index";

export class AboutSection extends React.Component {

	state = { activeSlide: 1 }

	componentDidMount() {
		highlightText(['code', 'design']);
	}

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

			<Section>
				{/*// TODO -- possibly pull out into seperate component if used elsewhere*/}

				{activeSlide === 1 && <AvatarCard
					body="Howdy! I'm Alan Sax. I design and code awesome apps."
					image="http://i.imgur.com/Op430uO.png"
				    hideImageOnMobile
				/>}
				{activeSlide === 2 && <div className="gallery-row">
					<AvatarCard
						image="https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg"
						imageTitle="Hobby 1"
					    centered
					/>
					<AvatarCard
						image="https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg"
						imageTitle="Hobby 2"
					    centered
					/>
					<AvatarCard
						image="https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg"
						imageTitle="Hobby 3"
					    centered
					/>
				</div>}
				{activeSlide === 3 && <AvatarCard
					body="Section 3"
					image="https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg"
					imageTitle="Section 3"
				/>}

				<div className="button-row-bottom">
					<button className={`${isActive(1)}`} onClick={() => setActiveSlide(1)}>Bio</button>
					<button className={`${isActive(2)}`} onClick={() => setActiveSlide(2)}>Hobbies</button>
					<button className={`${isActive(3)}`} onClick={() => setActiveSlide(3)}>Projects</button>
				</div>
			</Section>
		)
	}
}