import React from 'react';
import './App.css';
import 'tachyons';
import { Route, Link, Switch, BrowserRouter as Router} from 'react-router-dom';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import About from './About/About';
import Facilities from './Facilities/Facilities';
import Contact from './Contact/Contact';
import Admission from './Admission/Admission';
import Departments from './Departments/Departments';

function App() {
  return (
    <div className="app">
      <Router>
        <Route exact path="/">
          <Nav />
          <Home />
          <Contact />
          <Footer />
        </Route>
        <Route path="/about">
          <Nav />
          <About />
          <Footer />
        </Route>
        <Route path="/facilities">
          <Nav />
          <Facilities />
          <Footer />
        </Route>
        <Route path="/admission">
          <Nav />
          <Admission />
          <Footer />
        </Route>
        <Route path="/departments">
          <Nav />
          <Departments />
          <Footer />
        </Route>
      </Router>
    </div>
  );
}

export default App;
