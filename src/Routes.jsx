import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Mukinyi from './Pages/Mukinyi';
import Neema from './Pages/Neema';
import BHC from './Pages/BHC';
import Highway from './Pages/Highway';
import District from './Pages/District';
import Ministry from './Pages/Ministry';
import Events from './Pages/Events';

function Routes() {
	return useRoutes([
		{ path: '/', element: <Home /> },
		{ path: '/about', element: <About /> },
		{ path: '/districts', element: <District /> },
		{ path: '/join-a-ministry', element: <Ministry /> },
		{path: '/events', element: <Events />},
		// {path: '/mpa', element: <School /> },
		// {path: '/mukinyi-sacco', element: <Sacco />},
		{ path: '/mukinyi-church', element: <Mukinyi /> },
		{ path: '/neema-church', element: <Neema /> },
		{ path: '/blessed-hope-church', element: <BHC /> },
		{ path: '/highway-church', element: <Highway /> },
		// {path: '/404', element: <ErrorPage /> },
		// {path: '*', element: <Navigate to='/404' />},
	]);
}

export default Routes;
