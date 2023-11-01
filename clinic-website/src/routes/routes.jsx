import Error404 from "pages/Error404";
import Home from "pages/Home";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Rola a página para o topo quando a rota muda
  }, [pathname]);

  return null;
}

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path='/'
            element={<Home pageId='home' />}
          >
            <Route
              index
              element={<Home />}
            />
          </Route>
          <Route
            path='lixo'
            element={<Home />}
          />
          <Route
            path='*'
            element={<Error404 pageId='error' />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
