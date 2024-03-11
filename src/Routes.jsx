import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';

function Routes() {
	return useRoutes([
		{ path: '/', element: <Home /> },
		{ path: '/about', element: <About /> },
		// {path: '/groups', element: <Groups />},
		// {path: '/announcements', element: <Announcements />},
		// {path: '/projects', element: <Projects />},
		// {path: '/resources', element: <Resources /> },
		// {path: '/projects/school', element: <School /> },
		// {path: '/projects/mukinyi-sacco', element: <Sacco />},
		// {path: '/mukinyi-church', element: <Mukinyi />},
		// {path: '//neema-church', element: <Neema />},
		// {path: '/blessed-hope-church', element: <BHC />},
		// {path: '/highway-church', element: <Highway />},
		// {path: '/404', element: <ErrorPage /> },
		// {path: '*', element: <Navigate to='/404' />},
	]);
}

export default Routes;
