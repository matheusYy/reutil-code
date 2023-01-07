// scss
import "./scss/index.css";
// elements
import React from "react";
import ReactDOM from "react-dom/client";
import { InputFormik } from "./util/forms/formik";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <InputFormik />
  </React.StrictMode>
);
