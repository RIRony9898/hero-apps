import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import AppsPage from "../Pages/AppsPage";
import InstallationPage from "../Pages/InstallationPage";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: "apps",
        element: <AppsPage />,
      },
      {
        path: "installed",
        element: <InstallationPage />,
      },
    ]
  },
]);

export default router;