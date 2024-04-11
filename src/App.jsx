import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
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
