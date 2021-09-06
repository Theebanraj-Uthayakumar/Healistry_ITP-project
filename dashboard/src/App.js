import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Dashbord from "./components/Dashbord";
import Doctors_add from "./components/pages/Doctors/Doctors_add";
import Doctors_update from "./components/pages/Doctors/Doctors_update";
import add from "./components/pages/Hospital/add";
import hospital_update from "./components/pages/Hospital/page1";

// All routing routes ddefined here
const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashbord} />
      <Route exact path="/Doctors_Add" component={Doctors_add} />
      <Route exact path="/Doctors_Update" component={Doctors_update} />
      <Route exact path="/Hospital_add" component={add} />
      <Route exact path="/Hospital_update" component={hospital_update} />

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
