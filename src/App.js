import './App.scss';
import React, { useEffect, Fragment } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import { AnimatePresence, motion } from "framer-motion";
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

      <AnimatePresence initial={false} exitBeforeEnter>

        <Navbar />

        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Main} />
          <Route path="/mission/:missionId" component={Mission} />
          <motion.Fragment exit="undefined">
            <Route path="/404" component={NotFound} />
            <Redirect to="/404" />
          </motion.Fragment>
        </Switch>

      </AnimatePresence>

    </Fragment>
  );
}

export default App;
