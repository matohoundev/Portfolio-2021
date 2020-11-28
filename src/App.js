import './App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './starter/navbar/NavBar';
import Footer from './starter/footer/Footer';
import Main from './home/Main';
import Mission from './mission/Mission';
import Contact from './contact/Contact';

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/mission" component={Mission} />
        <Route path="/contact" component={Contact} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
