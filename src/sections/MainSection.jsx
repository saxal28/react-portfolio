import React from 'react'
import Section from "./Section";
import AvatarCard from "./common/AvatarCard";

export default class MainSection extends React.Component {
	render() {
		return (
			<div>
				<Section
					title="Alan Sax"
				    body="A Web Portfolio"
				    main
				/>

				<Section>
					<AvatarCard
						body="Howdy! I'm Alan Sax. I design and code awesome apps."
					/>
				</Section>

			</div>
		)
	}
}