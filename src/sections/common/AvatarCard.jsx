import React from 'react'
import {ImageCircle} from "./ImageCircle";

export default class AvatarCard extends React.Component {

	render() {

		const { image, body } = this.props;

		return (
			<div className="avatar-card">
				<h4 className="card-body">
					{body}
				</h4>
				<div className="card-image">
					<ImageCircle image={image} title="This is Me !"/>
				</div>
			</div>
		)
	}
}