import CommonLayout from "../../layouts/CommonLayout.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage404 from "@/components/custom/common/404Error/ErrorPage404.tsx";
import LoginPage from "@/components/page/Login/Login.tsx";
import RegisterPage from "@/components/page/Register/Register.tsx";
import AnalyticsPage from "@/pages/Analytics.tsx";

export function MainRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<CommonLayout type="large" />}>
          {/* Retail module routes */}
          <Route path="/" element={<AnalyticsPage />} />
          {/* <Route path="/project/create" element={<CreateProjectPage />} /> */}
        </Route>
        {/* Other routes */}
        <Route path="/login" element={<ErrorPage404 />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="*" element={<ErrorPage404 />} />
      </Routes>
    </BrowserRouter>
  );
}
