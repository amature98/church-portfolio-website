import React from 'react';
import Template from '../Components/About/Template';
import Page from '../Pages/Page';
import Header from '../Components/Header';
import BgImage from '../Images/church1.jpg';
import Image from '../Images/elder2.jpg'

function Mukinyi() {
	return (
		<Page title='Mukinyi Church - PCEA MUKINYI PARISH'>
			<Header
				title='PCEA Mukinyi Church'
				headerText="We're glad to have you!"
				bgimage={BgImage}
				textAlign='center'
			/>
			<Template
				churchName='Mukinyi Church'
                text='"At P.C.E.A Mukinyi Church, we believe that the great commission is our mandate as the church of Jesus Christ and we ensure that we create a platform that allows members to express the different graces that have been apportioned to them by God. We encourage each other into growing towards Jesus Christ and make it our business to go out and show Him to the lost and lonely."'
                image={Image}
                cardHeader='Elder Paul Thairu'
                cardTitle='LCC Chairperson'
			/>
		</Page>
	);
}

export default Mukinyi;
