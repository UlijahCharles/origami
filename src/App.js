import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import ItemPage from "./pages/itemPage";
import Page404 from "./pages/page404";
import Root from "./pages/root";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Page404 />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: ":title",
        element: <ItemPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
