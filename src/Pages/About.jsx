import React from 'react';
import Page from './Page';
import Header from '../Components/Header/index';
import Text from '../Components/About/Text';
import Leadership from '../Components/About/Leadership';
import BgImage from '../Images/cross.jpg';

function About() {
	return (
		<>
			<Page title='About - PCEA MUKINYI PARISH'>
				<Header
					height='70vh'
					title='Who are we?'
					headerText='Get to know us a little bit further'
					textAlign='center'
					bgimage={BgImage}
				/>
				<Text />
				<Leadership />
			</Page>
		</>
	);
}

export default About;
