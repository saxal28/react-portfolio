import React from "react";
import Section from "./common/Section";
import AvatarCard from "./common/AvatarCard";
import {Projects} from "../data/Projects";

export class ContactSection extends React.Component {


	render() {

		return (

			<Section>

				 <div className="flex-row">
					 <a href="https://github.com/saxal28" target="_blank"><img className="icon-link" src="https://www.hyper.no/assets/github-icon-213ce151062f75058d614837499b5855.svg"/></a>
					 <a href="https://www.instagram.com/saxal28/?hl=en" target="_blank"><img className="icon-link" src="http://is1.mzstatic.com/image/thumb/Purple117/v4/09/71/76/0971766d-3c1d-9246-1bf0-9d11211e599f/source/1200x630bb.jpg"/></a>
					 <a href="https://www.linkedin.com/in/alan-sax-576a24b3" target="_blank"><img className="icon-link" src="https://lh3.googleusercontent.com/00APBMVQh3yraN704gKCeM63KzeQ-zHUi5wK6E9TjRQ26McyqYBt-zy__4i8GXDAfeys=w300"/></a>
				 </div>

				<div className="button-row-bottom">
					<a href="https://github.com/saxal28/caesar_cipher/raw/master/Resume_Sax_Alan.pdf" className="button">Download Resume</a>
				</div>
			</Section>
		)
	}
}