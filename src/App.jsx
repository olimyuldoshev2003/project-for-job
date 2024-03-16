import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Accumulator from "./pages/Accumulator/Accumulator";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "accumulator",
          element: <Accumulator />,
        }
      ],
    },
  ]);

  return <>
    <RouterProvider router={router}/>
  </>;
}

export default App;
