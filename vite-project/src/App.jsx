import "./App.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Gigs from "./Pages/gigs/Gigs";
import Gig from "./Pages/gig/Gig";
import MyGigs from "./Pages/myGigs/MyGigs";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Gigs />,
        },
        {
          path: "/gig",
          element: <Gig />,
        },
        {
          path: "/myGigs",
          element: <MyGigs />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
