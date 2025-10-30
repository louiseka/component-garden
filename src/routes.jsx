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
          { path: "redux", element: <Redux /> },
          { path: "usecontext", element: <Context /> },
        ],
      },
    ],
  },
];

export default routes;
