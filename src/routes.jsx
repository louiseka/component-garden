import Root from "./components/Root/Root";
import Home from "./pages/Home/Home";
import Components from "./pages/Components/Components";
import Hooks from "./pages/Hooks/Hooks";
import Forms from "./pages/Forms/Forms";
import UseState from "./pages/Hooks/UseState";
import UseEffect from "./pages/Hooks/UseEffect";

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
    ],
  },
];

export default routes;
