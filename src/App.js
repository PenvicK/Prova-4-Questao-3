import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Teste from './pages/Teste';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/teste" component={Teste} />
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
