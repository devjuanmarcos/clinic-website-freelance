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
        {/* <Menu /> */}
        <ScrollToTop />
        <Routes>
          <Route
            path='/'
            element={<Home />}
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
            element={<Home />}
          />
        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}
