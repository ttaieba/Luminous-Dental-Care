import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import './App.css';
import Blogs from "./components/Blogs/Blogs";
import Doctors from "./components/Doctors/Doctors";
import Login from "./components/Forms/Login";
import Register from "./components/Forms/Register";
import Home from "./components/Home/Home";
import Notfound from "./components/Notfound/Notfound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Details from "./components/Services/Details";
import Services from "./components/Services/Services";
import Footer from "./components/Shared/Footer";
import Topbar from "./components/Shared/Topbar";
import AuthProvider from "./Context/AuthProvider";

// links end-------------------------------/



function App() {
  return (
    <div className="App">
      <AuthProvider>

        <Router>
          <Topbar></Topbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>


            <Route path="/blogs">
              <Blogs></Blogs>
            </Route>

            <PrivateRoute path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>

            <PrivateRoute path="/details">
              <Details></Details>
            </PrivateRoute>

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
      </AuthProvider>

    </div>
  );
}

export default App;
