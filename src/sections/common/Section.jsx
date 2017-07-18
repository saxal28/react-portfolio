import React from 'react'

export default class Section extends React.Component {

	render() {

		const { children, title, body, main } = this.props;

		return (
			<section className={main && "main"}>
				<div className="container">
					<h1>{title}</h1>
					<h3>{body}</h3>
					{children}
				</div>
			</section>
		)
	}
}