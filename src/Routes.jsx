import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
// Main Routes
import Home from "./Pages/Home.page.jsx";
import About from "./Pages/About.page.jsx";
import Events from "./Pages/Events.page.jsx";
import Event from "./Pages/Event.page.jsx";
import Districts from "./Pages/Districts.page.jsx";
// Congregations
import Mukinyi from "./Pages/Mukinyi.page.jsx";
import Neema from "./Pages/Neema.page.jsx";
import BHC from "./Pages/Bhc.page.jsx";
import Highway from "./Pages/Highway.page.jsx";
// Projects
import Sacco from "./Pages/Sacco.page.jsx";
import School from "./Pages/School.page.jsx";
import RopesPage from "./Pages/Ropes.page.jsx";
// Articles
import ArticlesPage from "./Pages/Articles.page.jsx";
import ArticlePage from "./Pages/Article.page.jsx";
// Ministries
import PcmfPage from "./Pages/PCMF.page.jsx";
import WomensPage from "./Pages/Womens.page.jsx";
import ChilrenPage from "./Pages/Chilren.page.jsx";
import YouthPage from "./Pages/Youth.page";
import EvangelismPage from "./Pages/Evangelism.page.jsx";
import HealthBoardPage from "./Pages/HealthBoard.page.jsx";
import ChristianEducationPage from "./Pages/ChristianEducation.page.jsx";
import JprcPage from "./Pages/Jprc.page.jsx";
// Error
import ErrorPage from "./Pages/Error.page.jsx";

function Routes() {
  return useRoutes([
    // Main routes
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/districts", element: <Districts /> },
    { path: "/events", element: <Events /> },
    { path: "/events/:id", element: <Event /> },
    // Routes to ministries
    { path: "//pcmf", element: <PcmfPage /> },
    { path: "/womans-guild", element: <WomensPage /> },
    { path: "/children-ministry", element: <ChilrenPage /> },
    { path: "/youth-fellowship", element: <YouthPage /> },
    { path: "/evangelism", element: <EvangelismPage /> },
    { path: "/christian-education", element: <ChristianEducationPage /> },
    { path: "/jprc", element: <JprcPage /> },
    { path: "/health-board", element: <HealthBoardPage /> },
    // Routes to projects
    { path: "/mpa", element: <School /> },
    { path: "/mukinyi-sacco", element: <Sacco /> },
    { path: "/ropes", element: <RopesPage /> },
    // Routes to congregations
    { path: "/mukinyi-church", element: <Mukinyi /> },
    { path: "/neema-church", element: <Neema /> },
    { path: "/blessed-hope-church", element: <BHC /> },
    { path: "/highway-church", element: <Highway /> },
    // Routes to articles
    { path: "/articles", element: <ArticlesPage /> },
    { path: "/articles/:id", element: <ArticlePage /> },
    { path: "/404", element: <ErrorPage /> },
    { path: "*", element: <Navigate to="/404" /> },
  ]);
}

export default Routes;
