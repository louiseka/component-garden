import Root from "./components/Root/Root";
import Home from "./pages/Home/Home";
import Components from "./pages/Components/Components";
import Hooks from "./pages/Hooks/Hooks";
import Forms from "./pages/Forms/Forms";
import UseState from "./pages/Hooks/UseState";
import UseEffect from "./pages/Hooks/UseEffect";
import StateManagement from "./pages/StateManagement/StateManagement";
import Redux from "./pages/StateManagement/Redux";
import Context from "./pages/StateManagement/Context";
import Zustand from "./pages/StateManagement/Zustand";

import { Navigate } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "components",
        element: <Components />,
      },
      {
        path: "hooks",
        element: <Hooks />,
        children: [
          {
            index: true,
            element: <Navigate to="usestate" replace />,
          },
          {
            path: "usestate",
            element: <UseState />,
          },
          {
            path: "useeffect",
            element: <UseEffect />,
          },
        ],
      },
      {
        path: "forms",
        element: <Forms />,
      },
      {
        path: "state-management",
        element: <StateManagement />,
        children: [
          { index: true, element: <Navigate to="redux" replace /> },
          { path: "redux", element: <Redux /> },
          { path: "zustand", element: <Zustand /> },
          { path: "usecontext", element: <Context /> },
        ],
      },
    ],
  },
];

export default routes;
