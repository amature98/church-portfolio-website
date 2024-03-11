import React from 'react';
import Page from './Page';
import Header from '../Components/Header/index';
import HeaderBgimg from '../Images/home-bgimg.jpg';
import AboutSection from '../Components/Header/AboutSection';
import LocationsSections from '../Components/Header/Locations';
import GetInvolved from '../Components/Header/GetInvolved';

function Home() {
	return (
		<>
			<Page title='Home'>
				<Header
					title='Mukinyi Parish'
					headerText='Inspiring people to follow Jesus Christ in faith, love and hope.'
					height='100vh'
					bgimage={HeaderBgimg}
				/>
				<AboutSection
					title='Welcome to Mukinyi Parish'
					aboutText={
						"Welcome to Mukinyi Parish, where faith meets community and hope sustains. We invite you to join us on a journey of spiritual growth and fellowship. Whether you're seeking solace, friendship, or a deeper connection with your faith, you'll find a warm embrace and open hearts here. Come as you are, and let's walk together in the light of God's love."
					}
				/>
				<GetInvolved />
				<LocationsSections
					title={'Our Church Gatherings'}
					subtitle={'Join us as we gather at one of our Mukinyi churches.'}
				/>
			</Page>
		</>
	);
}

export default Home;
