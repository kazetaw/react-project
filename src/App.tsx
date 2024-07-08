import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Todo from "./page/Todo";
import Home from "./page/Home";
import Nav from "./components/Nav";
import CheckList from "./page/CheckList";

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
