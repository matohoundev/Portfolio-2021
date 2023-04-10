import { Route, Routes, useLocation } from "react-router-dom";
import React, { useEffect, Fragment } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { AnimatePresence } from "framer-motion";
import Navbar from "./starter/navbar/NavBar";
import Main from "./pages/home/Main";
import Mission from "./pages/mission/Mission";
import NotFound from "./pages/404/Notfound";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000, delay: 0, easing: "ease-in-out" });
    console.clear();
  }, []);

  const location = useLocation();

  return (
    <Fragment>
      <AnimatePresence initial={false} exitBeforeEnter>
        <Navbar />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Main />} />
          <Route path="/mission/:id" element={<Mission />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </Fragment>
  );
}

export default App;
