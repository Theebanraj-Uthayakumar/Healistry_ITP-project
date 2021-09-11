import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';

import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-ui-kit';
import Ambulance_add from "./components/pages/Ambulance/Ambulance_add";
import Ambulance_update from "./components/pages/Ambulance/Ambulance_update";
import Camping_add from "./components/pages/Camping/Camping_add";
import Camping_update from "./components/pages/Camping/Camping_update";
import Dashbord from "./components/Dashbord";
import Doctors_add from "./components/pages/Doctors/Doctors_add";
import Doctors_update from "./components/pages/Doctors/Doctors_update";
import cleaning_update from "./components/pages/Cleaning_com/cleaning_update";
import cleaning_add from "./components/pages/Cleaning_com/cleaning_service_add"
import FacilitiesAdd from "./components/pages/facility/FacilitiesAdd";
import TechnologiesAdd from "./components/pages/technology/TechnologiesAdd";
import Facility from "./components/pages/facility/Facility";
import FacilityEdit from "./components/pages/facility/FacilityEdit";
import Technology from "./components/pages/technology/Technology";
import TechnologyEdit from "./components/pages/technology/TechnologyEdit";
import Blood_bank_add from "./components/pages/Blood Bank/Blood_bank_add";
import blood_bank_update from "./components/pages/Blood Bank/blood_bank_update";
import Lab_Details_Add from "./components/pages/Laboratory/Lab_Details_Add";
import Lab_Details_Update from "./components/pages/Laboratory/Lab_Details_Update";
import add from "./components/pages/Hospital/add";
import page1 from "./components/pages/Hospital/page1";


// All routing routes ddefined here
const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashbord} />
      <Route exact path="/Doctors_update" component={Doctors_update} />
      <Route exact path="/Doctors_add/" component={Doctors_add} />
      <Route exact path="/Ambulance_Add" component={Ambulance_add} />
      <Route exact path="/Camping_add" component={Camping_add} />
      <Route exact path="/Ambulance_update" component={Ambulance_update} />
      <Route exact path="/camping_update" component={Camping_update} />
      <Route exact path="/cleaning_add" component={cleaning_add} />
      <Route exact path="/cleaning_update" component={cleaning_update} />
      <Route exact path="/technology/add" component={TechnologiesAdd} />
      <Route exact path="/technology/update" component={Technology} />
      <Route exact path="/technology/:id" component={TechnologyEdit} />
      <Route exact path="/facility/add" component={FacilitiesAdd} />
      <Route exact path="/facility/update" component={Facility} />
      <Route exact path="/facility/:id" component={FacilityEdit} />
      <Route exact path="/Blood_bank_add" component={Blood_bank_add} />
      <Route exact path="/blood_bank_update" component={blood_bank_update} />
      <Route exact path="/Lab_Details_Update" component={Lab_Details_Update} />
      <Route exact path="/Lab_Details_Add" component={Lab_Details_Add} />
      <Route exact path="/Hospital_add" component={add} />
      <Route exact path="/Hospital_update" component={page1} />
    </Switch>
  );
};


function App() {
  return (
    <Router>
      <Routing />
    </Router>
  );
}

export default App;
