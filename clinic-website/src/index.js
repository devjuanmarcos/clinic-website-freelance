import React from "react";
import ReactDOM from "react-dom/client";
import "styles/globalStyles.module.css";
import AppRoutes from "routes/routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
