import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/home/Home";
import Trip from "./pages/trip/Trip";
import CreateTrip from "./pages/trip/CreateTrip";
import WithNavabar from "./layout/WithNavabar";
import Login from "./pages/login/login";

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <WithNavabar>
        <Home />
      </WithNavabar>
    ),
  },
  {
    path: '/trip',
    element: (
      <WithNavabar>
        <Trip />
      </WithNavabar>
    ),
  },
  {
    path: '/create-trip',
    element: (
      <WithNavabar>
        <CreateTrip />
      </WithNavabar>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
