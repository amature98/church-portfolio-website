import React from 'react';
import Header from '../Components/Header/index';
import BgImage from '../Images/cross.jpg';

function About() {
	return (
		<>
			<Header
				height='75vh'
				title='About Mukinyi Parish'
				headerText='Get to know us a little bit further'
				textAlign='center'
				bgimage={BgImage}
			/>
		</>
	);
}

export default About;
