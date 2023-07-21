import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import ItemPage from "./pages/itemPage";
import Root from "./pages/root";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: ":title",
        element: <ItemPage />,
      },
      /*{ path: "*", element: <Page404 /> }*/
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
