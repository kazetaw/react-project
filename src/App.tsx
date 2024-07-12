import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Todo from "./page/Todo";
import Home from "./page/Home";
import Nav from "./components/Nav";
import CheckList from "./page/CheckList";
import { Landingpage } from "./page/Landingpage";
import "./index.css";
import Card_ws from "./page/Card_ws";
import Ex_antd from "./page/Ex_antd";
// import { Card } from "antd";
import ShoppingCart from "./page/ShoppingCart";
const MainLayout = () => (
  <>
    <Nav />
    <Outlet />
  </>
);

const Router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "todo",
        element: <Todo />,
      },
      {
        path: "word",
        element: <CheckList />,
      },
      {
        path: "landingpage",
        element: <Landingpage />,
      },
      {
        path: "card",
        element: <Card_ws />,
      },
      {
        path: "antd",
        element: <Ex_antd />,
      },
      {
        path: "shopping_card",
        element: <ShoppingCart />,
      },

      {
        path: "*",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
