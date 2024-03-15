// Import components
import React from 'react';
import Header from '../Components/Header/index';
import Page from '../Pages/Page';

// Import Image
import BgImage from '../Images/districts.jpg';

function District() {
	return (
		<>
			<Page title='Districts - PCEA Mukinyi Parish'>
				<Header
					title='Mukinyi Parish Districts'
					headerText='Find the right community for you to grow your faith'
					textAlign='center'
					height='75vh'
					bgimage={BgImage}
				/>
			</Page>
		</>
	);
}

export default District;
