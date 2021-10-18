import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import './App.css';
import Login from "./components/Forms/Login";
import Register from "./components/Forms/Register";
import Home from "./components/Home/Home";
import Notfound from "./components/Notfound/Notfound";
import Services from "./components/Services/Services";
import Footer from "./components/Shared/Footer";
import Topbar from "./components/Shared/Topbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Topbar></Topbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>


        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
