import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/pages/home"
import Nav from "./component/templates/header"
import Footer from "./component/templates/footer"
import Ambulance from './component/pages/Ambulance';
import Camping from './component/pages/Camping';

// All routing routes ddefined here
const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Ambulance_Details" component={Ambulance}/>
      <Route exact path="/Camping_Details" component={Camping} />
    </Switch >
  )
}

const App = () => {
  return (
    <Router>
      <Nav />
      <Routing />
      <Footer />
    </Router>
  )
}

export default App
