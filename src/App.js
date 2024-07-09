import "./App.css";
import { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import HostelDetails from "./components/HostelDetails/HostelDetails";
import Footer from "./components/Footer";
import WorkWithUsPage from "./components/WorkWithUs/WorkWithUsPage";
import Terms from "./components/RulesAndLegal/Terms";
import Privacy from "./components/RulesAndLegal/Privacy";
import Guest from "./components/RulesAndLegal/Guest";
import Cancellation from "./components/RulesAndLegal/Cancellation";
import TourGroups from "./components/RulesAndLegal/TourGroups";
import Error from "./components/Error";
import Blog from "./components/Error";
import Merch from "./components/Merch/Merch";
import AllPosts from "./components/AllPosts.js";
import OnePost from "./components/OnePost.js";
import Timeline from "./components/Timeline.js";


import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import Popup from "./components/Popup";
import YogaSchoolPage from "./components/Yoga/YogaSchoolPage";
import Manali from "./components/Manali.js";
import Varkala from './components/Varkala.js';
import LaunchPad from "./components/LaunchPad/LaunchPad.js";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      // {
      //   path: '/hostel/:id',
      //   element: <HostelDetails />,
      // },
      // {
      //   path: '/hostelnew/manali',
      //   element: <Manali />,
      // },
      // {
      //   path: '/hostelnew/varkala',
      //   element: <Varkala />,
      // },
      // {
      //   path: '/workwithus',
      //   element: <WorkWithUsPage />,
      // },
      // {
      //   path: '/terms',
      //   element: <Terms />,
      // },
      // {
      //   path: '/privacy',
      //   element: <Privacy />,
      // },
      // {
      //   path: '/guest',
      //   element: <Guest />,
      // },
      // {
      //   path: '/cancellation',
      //   element: <Cancellation />,
      // },
      // {
      //   path: '/tourgroups',
      //   element: <TourGroups />,
      // },
      // {
      //   path: '/blog',
      //   element: <AllPosts />,
      // },
      // {
      //   path: '/blog/:slug',
      //   element: <OnePost />,
      // },
      // {
      //   path: '/merch',
      //   element: <Merch />,
      // },
      // {
      //   path: '/yoga',
      //   element: <YogaSchoolPage />,
      // },
      // {
      //   path: '/launchpad',
      //   element: <LaunchPad />
      // },
      // {
      //   path: '/ourstory',
      //   element: <Timeline />,
      // },
    ],
  },
]);

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Wrapper>
      <div className="font-dmsans top-4 h-100">

        {/* <Navbar /> */}
        {/* <Popup /> */}
        <Outlet />
        {/* <Footer /> */}
      </div>
    </Wrapper>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
