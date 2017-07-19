import React from 'react'

export default class Section extends React.Component {

	render() {

		const { children, title, body, main } = this.props;
		const classes = [
			// 'animated slideInBigLeft',
			`${main && "main"}`,
		];

		return (
			<section className={classes.join(" ")}>
				<div className="container animated fadeIn">
					<h1>{title}</h1>
					<h3>{body}</h3>
					{children}
				</div>
			</section>
		)
	}
}