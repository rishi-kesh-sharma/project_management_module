import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App.tsx";
import "./index.css";
import RootLayout from "./components/custom/layout/RootLayout/RootLayout.tsx";
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store.ts";

import { registerLicense } from "@syncfusion/ej2-base";
const licenseKey = `ORg4AjUWIQA/Gnt2U1hhQlJBfVhdX2ZWfFN0QXNYf1RxcV9EY0wxOX1dQl9nSXhRc0dhWHhfeHZWRmE=`;

registerLicense(licenseKey);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <RootLayout>
        <App />
      </RootLayout>
    </ReduxProvider>
  </React.StrictMode>,
);
