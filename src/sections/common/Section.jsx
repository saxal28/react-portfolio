import React from 'react'

export default class Section extends React.Component {

	render() {

		const { children, title, body, main, className } = this.props;
		const classes = [
			// 'animated slideInBigLeft',
			`${main && "main"}`,
			className,
		];

		return (
			<section className={classes.join(" ")}>
				<div className="container animated fadeIn">
					{title && <h1>{title}</h1>}
					{body && <h3>{body}</h3>}
					{children}
				</div>
			</section>
		)
	}
}