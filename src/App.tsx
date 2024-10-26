import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import { NavContextProvider } from "./context/NavContext";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/destination/:currentDestination?",
        element: <Destination />,
      },
      {
        path: "/crew",
        element: <Crew />,
      },
      {
        path: "/technology",
        element: <Technology />,
      },
    ],
  },
]);

function App() {
  return (
    <NavContextProvider>
      <RouterProvider router={router} />
    </NavContextProvider>
  );
}

export default App;
