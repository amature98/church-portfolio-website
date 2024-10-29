import React, { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Loader from "./Components/Loader/Loader.jsx"; 

// Main Routes
const Home = lazy(() => import("./Pages/Home.page.jsx"));
const About = lazy(() => import("./Pages/About.page.jsx"));
const Events = lazy(() => import("./Pages/Events.page.jsx"));
const Event = lazy(() => import("./Pages/Event.page.jsx"));
const Districts = lazy(() => import("./Pages/Districts.page.jsx"));
const Church = lazy(() => import("./Pages/Church.page.jsx"));
// Congregations
const Mukinyi = lazy(() => import("./Pages/Mukinyi.page.jsx"));
const Neema = lazy(() => import("./Pages/Neema.page.jsx"));
const BHC = lazy(() => import("./Pages/Bhc.page.jsx"));
const Highway = lazy(() => import("./Pages/Highway.page.jsx"));
// Projects
const Sacco = lazy(() => import("./Pages/Sacco.page.jsx"));
const School = lazy(() => import("./Pages/School.page.jsx"));
const RopesPage = lazy(() => import("./Pages/Ropes.page.jsx"));
// Articles
const ArticlesPage = lazy(() => import("./Pages/Articles.page.jsx"));
const ArticlePage = lazy(() => import("./Pages/Article.page.jsx"));
// Ministries
const PcmfPage = lazy(() => import("./Pages/PCMF.page.jsx"));
const WomensPage = lazy(() => import("./Pages/Womens.page.jsx"));
const ChilrenPage = lazy(() => import("./Pages/Chilren.page.jsx"));
const YouthPage = lazy(() => import("./Pages/Youth.page"));
const EvangelismPage = lazy(() => import("./Pages/Evangelism.page.jsx"));
const HealthBoardPage = lazy(() => import("./Pages/HealthBoard.page.jsx"));
const ChristianEducationPage = lazy(
  () => import("./Pages/ChristianEducation.page.jsx")
);
const JprcPage = lazy(() => import("./Pages/Jprc.page.jsx"));
// Error
const ErrorPage = lazy(() => import("./Pages/Error.page.jsx"));
function Routes() {
  return useRoutes([
    // Main routes
    {
      path: "/",
      element: (
        <Suspense fallback={<Loader />}>
          <Home />
        </Suspense>
      ),
    },
    {
      path: "/about",
      element: (
        <Suspense fallback={<Loader />}>
          <About />
        </Suspense>
      ),
    },
    {
      path: "/districts",
      element: (
        <Suspense fallback={<Loader />}>
          <Districts />
        </Suspense>
      ),
    },
    {
      path: "/churches",
      element: (
        <Suspense fallback={<Loader />}>
          <Church />
        </Suspense>
      ),
    },
    {
      path: "/events",
      element: (
        <Suspense fallback={<Loader />}>
          <Events />
        </Suspense>
      ),
    },
    {
      path: "/events/:id",
      element: (
        <Suspense fallback={<Loader />}>
          <Event />
        </Suspense>
      ),
    },
    // Routes to ministries
    {
      path: "/pcmf",
      element: (
        <Suspense fallback={<Loader />}>
          <PcmfPage />
        </Suspense>
      ),
    },
    {
      path: "/womans-guild",
      element: (
        <Suspense fallback={<Loader />}>
          <WomensPage />
        </Suspense>
      ),
    },
    {
      path: "/children-ministry",
      element: (
        <Suspense fallback={<Loader />}>
          <ChilrenPage />
        </Suspense>
      ),
    },
    {
      path: "/youth-fellowship",
      element: (
        <Suspense fallback={<Loader />}>
          <YouthPage />
        </Suspense>
      ),
    },
    {
      path: "/evangelism",
      element: (
        <Suspense fallback={<Loader />}>
          <EvangelismPage />
        </Suspense>
      ),
    },
    {
      path: "/christian-education",
      element: (
        <Suspense fallback={<Loader />}>
          <ChristianEducationPage />
        </Suspense>
      ),
    },
    {
      path: "/jprc",
      element: (
        <Suspense fallback={<Loader />}>
          <JprcPage />
        </Suspense>
      ),
    },
    {
      path: "/health-board",
      element: (
        <Suspense fallback={<Loader />}>
          <HealthBoardPage />
        </Suspense>
      ),
    },

    // Routes to projects
    {
      path: "/mpa",
      element: (
        <Suspense fallback={<Loader />}>
          <School />
        </Suspense>
      ),
    },
    {
      path: "/mukinyi-sacco",
      element: (
        <Suspense fallback={<Loader />}>
          <Sacco />
        </Suspense>
      ),
    },
    {
      path: "/ropes",
      element: (
        <Suspense fallback={<Loader />}>
          <RopesPage />
        </Suspense>
      ),
    },

    // Routes to congregations
    {
      path: "/churches/mukinyi-church",
      element: (
        <Suspense fallback={<Loader />}>
          <Mukinyi />
        </Suspense>
      ),
    },
    {
      path: "/churches/neema-church",
      element: (
        <Suspense fallback={<Loader />}>
          <Neema />
        </Suspense>
      ),
    },
    {
      path: "/churches/blessed-hope-church",
      element: (
        <Suspense fallback={<Loader />}>
          <BHC />
        </Suspense>
      ),
    },
    {
      path: "/churches/highway-church",
      element: (
        <Suspense fallback={<Loader />}>
          <Highway />
        </Suspense>
      ),
    },

    // Routes to articles
    {
      path: "/articles",
      element: (
        <Suspense fallback={<Loader />}>
          <ArticlesPage />
        </Suspense>
      ),
    },
    {
      path: "/articles/:id",
      element: (
        <Suspense fallback={<Loader />}>
          <ArticlePage />
        </Suspense>
      ),
    },
    {
      path: "/404",
      element: (
        <Suspense fallback={<Loader />}>
          <ErrorPage />
        </Suspense>
      ),
    },
    { path: "*", element: <Navigate to="/404" /> },
  ]);
}

export default Routes;
