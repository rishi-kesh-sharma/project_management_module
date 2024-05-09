import CommonLayout from "../../layouts/CommonLayout.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage404 from "@/components/custom/common/404Error/ErrorPage404.tsx";
import { lazy } from "react";
import Loadable from "@/components/loader/Loadable.tsx";

const HomePage =Loadable(lazy(()=>import("../../pages/Home.tsx")))
const WhatsAppModal = Loadable(lazy(() => import("@/components/custom/modal/Modal/WhatsAppModal.tsx")));

export function MainRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<WhatsAppModal />} />
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
