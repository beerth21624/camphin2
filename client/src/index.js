import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/home/Home";
import Trip from "./pages/trip/Trip";
import CreateTrip from "./pages/trip/CreateTrip";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/trip",
        element: <Trip />,
    },
    {
        path: "/create-trip",
        element: <CreateTrip />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
