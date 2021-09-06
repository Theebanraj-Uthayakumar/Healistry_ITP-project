import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./component/pages/home";
import Nav from "./component/templates/header";
import Footer from "./component/templates/footer";
import doctor from './component/pages/doctor';
import about from './component/pages/about';
import contact from './component/pages/contact';
import cleaning from './component/pages/cleaning';
import bloodbank from './component/pages/bloodbank';
import bloodbank_details from './component/pages/bloodbank_details';
import Technology from "./component/pages/technology/Technology";
import Facility from "./component/pages/facility/Facility";
import SingleTechnology from "./component/pages/technology/SingleTechnology";
import SingleFacility from "./component/pages/facility/SingleFacility";


// All routing routes ddefined here
const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Doctors" component={doctor} />
      <Route exact path="/about" component={about} />
      <Route exact path="/contact" component={contact} />
      <Route exact path="/cleaning" component={cleaning} />
      <Route exact path="/BloodBank" component={bloodbank} />
      <Route exact path="/BloodBank_Details" component={bloodbank_details} />
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
