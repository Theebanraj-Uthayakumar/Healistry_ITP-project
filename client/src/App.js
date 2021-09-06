import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/pages/home"
import Nav from "./component/templates/header"
import Footer from "./component/templates/footer"
import Hospital from './component/pages/Hospital';


// All routing routes ddefined here
const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Hospital" component={Hospital} />
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
