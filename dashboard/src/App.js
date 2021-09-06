import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol  } from 'mdb-ui-kit';
import Dashbord from "./components/Dashbord";
import Doctors_add from "./components/pages/Doctors/Doctors_add";
import Doctors_update from "./components/pages/Doctors/Doctors_update";
import Ambulance_add from "./components/pages/Ambulance/Ambulance_add";
import Ambulance_update from "./components/pages/Ambulance/Ambulance_update";
import Camping_add from "./components/pages/Camping/Camping_add";
import Camping_update from "./components/pages/Camping/Camping_update";

// All routing routes ddefined here
const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashbord} />
      <Route exact path="/Doctors_Add" component={Doctors_add} />
      <Route exact path="/Doctors_Update" component={Doctors_update} />
      <Route exact path="/Ambulance_Add" component={Ambulance_add}/>
      <Route exact path="/Camping_add" component={Camping_add}/>
      <Route exact path="/Ambulance_update" component={Ambulance_update}/>
      <Route exact path="/camping_update" component={Camping_update}/>

    </Switch >
  )
}

function App() {
  return (
    <Router>
      <Routing />
    </Router>
  );
}

export default App;
