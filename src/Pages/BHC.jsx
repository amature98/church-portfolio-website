import React from 'react';
import Template from '../Components/Template/Church.template';
import Page from '../Pages/Page';
import Header from '../Components/Header/Header';
import Image from '../Images/elder2.jpg';
import Leadership from '../Components/About/Leadership';

// Import images
import Image1 from '../Images/elder1.jpg';
import Image2 from '../Images/elder2.jpg';
import Image3 from '../Images/elder3.jpg';
import BgImage from '../Images/church3.jpg';

import { bhcServiceArray } from '../Components/Arrays/Arrays';
import { bhcContacts } from '../Components/Arrays/Arrays';
const Leaders = [
	{
		name: 'Elder joseph Mugweru',
		title: 'Chairperson',
		image: Image1,
	},
	{
		name: 'Elder Zachariah Kori',
		title: 'Registrar',
		image: Image2,
	},
	{
		name: 'Mrs. Mary Kamau',
		title: 'Treasurer',
		image: Image3,
	},
];
function BHC() {
	return (
		<Page title='Blessed Hope Church - PCEA MUKINYI PARISH'>
			<Header
				title='PCEA Blessed Hope Church'
				headerText="We're glad to have you!"
				bgimage={BgImage}
				textAlign='center'
			/>
			<Template
				churchName='Blessed Hope Church'
				text='"At P.C.E.A Blessed Hope Church, we believe that the great commission is our mandate as the church of Jesus Christ and we ensure that we create a platform that allows members to express the different graces that have been apportioned to them by God. We encourage each other into growing towards Jesus Christ and make it our business to go out and show Him to the lost and lonely."'
				image={Image}
				cardHeader='Elder Joseph Mugweru'
				cardTitle='Mukinyi LCC Chairperson'
				serviceArray={bhcServiceArray}
				ContactArray={bhcContacts}
				contributeInfoArray={bhcServiceArray}
			/>
			<Leadership
				title='BHC LCC Leadership'
				leadersArray={Leaders}
				textAlign='center'
			/>
		</Page>
	);
}

export default BHC;
