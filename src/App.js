import './App.scss';
import React, { useEffect, Fragment } from 'react';
import ScrollToTop from './scrollRestoration/scrollToTop';
import Aos from "aos";
import "aos/dist/aos.css";
import { AnimatePresence } from "framer-motion";
import {Route, Switch, Redirect, useLocation} from 'react-router-dom';
import Navbar from './starter/navbar/NavBar';
import Main from './home/Main';
import Mission from './mission/Mission';
import NotFound from './home/404/Notfound';


function App() {

  useEffect(() => {
    Aos.init({ duration: 2000, delay: 0, easing: 'ease-in-out' });
  }, []);

  const location = useLocation();

  return (
    <Fragment>
  { /* <ScrollToTop /> */}

      <AnimatePresence exitBeforeEnter>

        <Navbar />

        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Main} />
          <Route path="/mission/:missionId" component={Mission} />
          <Route path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>

      </AnimatePresence>

    </Fragment>
  );
}

export default App;
