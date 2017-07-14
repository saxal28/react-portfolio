import React from 'react'
export class ImageCircle extends React.Component {

	render() {

		const { image, title } = this.props;
		const background = image ? { background: `url(${image})` } : {};

		return (
			<div className="image-container">
				<div className="image-circle" style={background} />
				{title && <div className="image-title">{title}</div>}
			</div>
		)
	}
}