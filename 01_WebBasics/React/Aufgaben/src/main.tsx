// @ts-expect-error error
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import UseState from "./useState";
import LightSwitch from "./LightSwitch.tsx";
import ToDoList from "./ToDoList.tsx";
import Homepage from "./homepage.tsx";
import API_Data from "./API_Data.tsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage/>
    },
    {
        path: "/HaggiClicker",
        element: <UseState/>,
    },
    {
        path: "/LightSwitch",
        element: <LightSwitch/>,
    },
    {
        path: "/ToDo",
        element: <ToDoList/>,
    },
    {
      path: "/Persons",
      element: <API_Data/>
    },
]);

const root = document.getElementById("root");

// @ts-expect-error error
ReactDOM.createRoot(root).render(
    <RouterProvider router={router} />,
);
