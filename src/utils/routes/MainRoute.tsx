import CommonLayout from "../../layouts/CommonLayout.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/Home.tsx";
import CreateProjectPage from "../../pages/CreateProject.tsx";
import ErrorPage404 from "@/components/custom/common/404Error/ErrorPage404.tsx";

export function MainRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CommonLayout type="large" />}>
          {/* Retail module routes */}
          <Route path="/dashboard" element={<HomePage />} />
          {/* <Route path="/project/create" element={<CreateProjectPage />} /> */}
        </Route>
        {/* Other routes */}
        <Route path="*" element={<ErrorPage404 />} />
      </Routes>
    </BrowserRouter>
  );
}
