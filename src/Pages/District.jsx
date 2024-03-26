// Import components
import React, { useState } from 'react';
import Header from '../Components/Header/Header';
import Page from '../Pages/Page';

// Import Image
import BgImage from '../Images/districts.jpg';

// Import components
import GoogleMaps from '../Components/About/GoogleMaps';
import DistrictTable from '../Components/About/DistrictTable';
// Import District array
import { DistrictArray } from '../Components/Arrays/Arrays';

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
				<DistrictTable DistrictArray={DistrictArray}/>
				<GoogleMaps />
			</Page>
		</>
	);
}

export default District;
