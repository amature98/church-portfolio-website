import React from 'react';
import Page from '../Pages/Page';
import Header from '../Components/Header';
import BgImage from '../Images/church2.jpg';
import Template from '../Components/About/Template';
import Image from '../Images/elder1.jpg';

function Neema() {
	return (
		<>
			<Page title='Neema Church - PCEA MUKINYI PARISH'>
				<Header
					bgimage={BgImage}
					textAlign='center'
					headerText='Neema ya mwenyezi Mungu iwe nanyi'
					title='Welcome to Neema Church'
				/>
				<Template
					churchName='Neema Church'
					image={Image}
					text='"At the heart of P.C.E.A Neema Church lies a steadfast conviction: that the call of the great commission is our sacred responsibility as followers of Jesus Christ. Here, we foster an environment where every member can authentically manifest the unique gifts bestowed upon them by God. Together, we inspire and support one another in our pursuit of spiritual growth and closeness to Jesus Christ. Moreover, it is our collective mission to extend His love and grace to those who are searching and in need of solace."'
					cardHeader='Elder Samuel Macharia'
					cardTitle='Neema LCC Chairperson'
				/>
			</Page>
		</>
	);
}

export default Neema;
