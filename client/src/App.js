import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/pages/home";
import Nav from "./component/templates/header";
import Footer from "./component/templates/footer";
import Technology from "./component/pages/technology/Technology";
import Facility from "./component/pages/facility/Facility";
import SingleTechnology from "./component/pages/technology/SingleTechnology";
import SingleFacility from "./component/pages/facility/SingleFacility";

// All routing routes ddefined here
const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/technology" component={Technology} />
      <Route exact path="/facility" component={Facility} />
      <Route exact path="/technology/:id" component={SingleTechnology} />
      <Route exact path="/facility/:id" component={SingleFacility} />
    </Switch>
  );
};

const App = () => {
  return (
    <Router>
      <Nav />
      <Routing />
      <Footer />
    </Router>
  );
};

export default App;
