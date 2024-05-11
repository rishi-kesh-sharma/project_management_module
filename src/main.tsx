import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import RootLayout from "./components/custom/layout/RootLayout/RootLayout.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RootLayout>
      <App />
    </RootLayout>
  </React.StrictMode>
);
