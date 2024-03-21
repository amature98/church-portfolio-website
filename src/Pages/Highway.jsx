import React from 'react';
import Template from '../Components/About/Template';
import Page from '../Pages/Page';
import Header from '../Components/Header';
import Leadership from '../Components/About/Leadership';

// Import images
import Image1 from '../Images/elder1.jpg';
import Image2 from '../Images/elder2.jpg';
import Image3 from '../Images/elder3.jpg';
import BgImage from '../Images/church4.jpg';
import Image from '../Images/elder2.jpg';

// Import Arrays
import { highwayServiceArray } from '../Components/Arrays/Arrays';
const Leaders = [
	{
		name: 'Elder Kanyi',
		title: 'Chairperson',
		image: Image1,
	},
	{
		name: 'Elder Ruth ',
		title: 'Registrar',
		image: Image3,
	},
	{
		name: 'Mr. Mubea',
		title: 'Treasurer',
		image: Image2,
	},
];
function Highway() {
	return (
		<Page title='Highway Church - PCEA MUKINYI PARISH'>
			<Header
				title='PCEA Highway Church'
				headerText="We're glad to have you!"
				bgimage={BgImage}
				textAlign='center'
			/>
			<Template
				churchName='Highway Church'
				text='"At P.C.E.A Highway Church, we believe that the great commission is our mandate as the church of Jesus Christ and we ensure that we create a platform that allows members to express the different graces that have been apportioned to them by God. We encourage each other into growing towards Jesus Christ and make it our business to go out and show Him to the lost and lonely."'
				image={Image}
				cardHeader='Elder Kanyi'
				cardTitle='Highway LCC Chairperson'
				serviceArray={highwayServiceArray}
			/>
			<Leadership
				title='Highway LCC Leadership'
				leadersArray={Leaders}
				textAlign='center'
			/>
		</Page>
	);
}

export default Highway;
