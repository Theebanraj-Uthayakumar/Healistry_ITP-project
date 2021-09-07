import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Dashbord from "./components/Dashbord";
import Doctors_add from "./components/pages/Doctors/Doctors_add";
import Doctors_update from "./components/pages/Doctors/Doctors_update";
import Blood_bank_add from "./components/pages/Blood Bank/Blood_bank_add";
import blood_bank_update from "./components/pages/Blood Bank/blood_bank_update";
import Lab_Details_Add from "./components/pages/Laboratory/Lab_Details_Add";
import Lab_Details_Update from "./components/pages/Laboratory/Lab_Details_Update";


// All routing routes ddefined here
const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashbord} />
      <Route exact path="/Doctors_Add" component={Doctors_add} />
      <Route exact path="/Doctors_Update" component={Doctors_update} />
      <Route exact path="/Blood_bank_add" component={Blood_bank_add}/>
      <Route exact path="/blood_bank_update" component={blood_bank_update} />
      <Route exact path="/Lab_Details_Update" component={Lab_Details_Update} />
      <Route exact path="/Lab_Details_Add" component={Lab_Details_Add} />

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
