import React from 'react';
import Nav from './Utility/Nav';
import About from './Components/About';
import Projects from './Components/Projects';
import GoogleyEyes from './Components/GoogleyEyes';
import HubcapDemo from './Components/HubcapDemo';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';

//npm run deploy

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Projects" component={GoogleyEyes} />
          <Route path="/hubcap" component={HubcapDemo} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Min nettside</h1>
    <h3>Marcus Hellerud Aadnekvam</h3>
  </div>
);

export default App;
