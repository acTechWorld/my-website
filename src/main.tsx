// main.tsx (or index.tsx)
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App"; // your homepage
import ViewBlog from "./views/ViewBlog";
import ViewPortfolio from "./views/ViewPortfolio";
import "./i18n/i18n"; 
import "./index.css"; // Tailwind or global styles
import Header from "./Header";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
        <Header />

      <Routes>
        {/* Homepage */}
        <Route path="/" element={<App />} />

        
        <Route path="/blog" element={<ViewBlog />} />
        <Route path="/portfolio" element={<ViewPortfolio />} />

        {/* Optional: 404 fallback */}
        <Route path="*" element={<div className="text-center text-black dark:text-white py-32">Page not found</div>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
