import React from 'react'
import {ImageCircle} from "./ImageCircle";
import {isMobile} from "../../util"

export default class AvatarCard extends React.Component {

	render() {

		const { image, body, imageTitle } = this.props;

		return (
			<div className="avatar-card">
				<h4 className="card-body">
					{body}
				</h4>
				{!isMobile() && <div className="card-image">
					<ImageCircle image={image} title={imageTitle}/>
				</div>}
			</div>
		)
	}
}