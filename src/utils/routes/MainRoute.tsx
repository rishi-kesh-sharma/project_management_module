import CommonLayout from "../../helpers/components/common/layouts/CommonLayout.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorPage404 } from "../../views/index.ts";
import HomePage from "../../views/project/pages/Home.tsx";
import CreateProjectPage from "../../views/project/pages/CreateProject.tsx";

export function MainRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CommonLayout type="large" />}>
          {/* Retail module routes */}
          <Route path="/dashboard" element={<HomePage />} />
          <Route path="/project/create" element={<CreateProjectPage />} />
        </Route>

        {/* Other routes */}
        <Route path="*" element={<ErrorPage404 />} />
      </Routes>
    </BrowserRouter>
  );
}
