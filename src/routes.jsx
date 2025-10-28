import Root from "./components/Root/Root";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

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
        path: "about",
        element: <About />,
      },
    ],
  },
];

export default routes;
