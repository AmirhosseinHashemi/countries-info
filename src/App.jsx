import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Error from "./pages/Error";
import Home, { loader as homeLoader } from "./pages/Home";
import Country from "./pages/Country";
import AppLayout from "./components/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: homeLoader,
      },

      {
        path: "/country/:countryName",
        element: <Country />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
