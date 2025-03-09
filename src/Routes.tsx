import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import App from "./App";


// Use a custom type if you need it
interface CustomWindow extends Window {
  _qdnBase: string;
}
const customWindow = window as unknown as CustomWindow;
const baseUrl = customWindow?._qdnBase || "";

export function Routes() {

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <App />,
      },
    ],
    {
      basename: baseUrl,
    }
  );

  return <RouterProvider router={router} />;
}
