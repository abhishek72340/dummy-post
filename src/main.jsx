import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { PostProvider } from "./context/post-context.jsx";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PostProvider>
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
    </PostProvider>
  </React.StrictMode>
);
