import React from 'react';
import {ImageCircle} from "./ImageCircle";
import {isMobile} from "../../util";

export default class AvatarCard extends React.Component {

	render() {

		const { image, body, imageTitle, centered, hideImageOnMobile } = this.props;
		const isCentered = centered ? {justifyContent: 'center' } : {}

		const imageHide = (hideImageOnMobile && isMobile()) ? true : false;

		return (
			<div className="avatar-card animated fadeIn" style={isCentered}>
				<h4 className="card-body">
					{body}
				</h4>
				{!imageHide && <div className="card-image">
					<ImageCircle image={image} title={imageTitle}/>
				</div>}
			</div>
		)
	}
}