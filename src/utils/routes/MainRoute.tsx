import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { createRoutes } from "./createRoutes.tsx";
import { routes } from "./routes.tsx";

export function MainRoute() {
  const router = createBrowserRouter(createRoutes(routes));
  return <RouterProvider router={router} />;
}
