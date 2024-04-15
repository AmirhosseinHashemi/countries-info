import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Error from "./pages/Error";
import Home, { action as homeAction } from "./pages/Home";
import Country, { loader as countryLoader } from "./pages/Country";
import AppLayout from "./components/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        action: homeAction,
      },

      {
        path: "/country/:countryName",
        element: <Country />,
        errorElement: <Error />,
        loader: countryLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
