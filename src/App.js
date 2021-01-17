import './App.scss';
import React, { useEffect } from 'react';
import ScrollToTop from './scrollRestoration/scrollToTop';
import Aos from "aos";
import "aos/dist/aos.css";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Navbar from './starter/navbar/NavBar';
import Main from './home/Main';
import Mission from './mission/Mission';
import Contact from './home/contact/Contact';
import NotFound from './home/404/Notfound';


function App() {

  useEffect(() => {
    Aos.init({ duration: 2000, delay: 0, easing: 'ease-in-out' });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/mission/:missionId" component={Mission} />
        <Route path="/contact" component={Contact} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>

    </Router>
  );
}

export default App;
