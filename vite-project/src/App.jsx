import "./App.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Gigs from "./Pages/gigs/Gigs";
import Gig from "./Pages/gig/Gig";
import MyGigs from "./Pages/myGigs/MyGigs";
import Add from "./Pages/add/Add";
import Orders from "./Pages/orders/Orders";
import Messages from "./Pages/messages/Messages";

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
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
