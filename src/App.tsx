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
import { store } from "./store/store";
import { Provider } from "react-redux";
import Pokemon from "./page/Pokemon";
import PokemonDetail from "./page/PokemonDetail";
import Redux from "./page/Redux";
import Navbar from "./components/home/Navbar";
const MainLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const Router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "todo",
        element: <Todo />,
      },
      {
        path: "word",
        element: <CheckList />,
      },
      {
        path: "count",
        element: <Redux />,
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
        path: "shopping_cart",
        element: <ShoppingCart />,
      },
    ],
  },
  {
    path: "landingpage",
    element: <Landingpage />,
  },
  {
    path: "pokemon",
    element: <Pokemon />,
  },
  {
    path: "pokemon/:name",
    element: <PokemonDetail />,
  },
  {
    path: "*",
    element: <Home />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "home",
    element: <Home />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={Router} />
    </Provider>
  );
}

export default App;
