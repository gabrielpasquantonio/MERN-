import "./App.css";
import Header from "./components/Header.jsx";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Favorite from "./pages/Favorite";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./pages/SignUp.js";
import { StyledContainer } from "./components/Styles";

//Loader Css
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

//auth & redux

import AuthRoute from './components/AuthRoute';
import BasicRoute from './components/BasicRoute'
import {connect} from 'react-redux'

function App({checked}) {
  return (
    <div className="App">
      <Router>

        {checked &&
        <Switch>
          <StyledContainer>
          <AuthRoute path="/favorite">
              <Header />
              <Favorite />
            </AuthRoute>
            <BasicRoute path="/login">
              <Header />
              <Login />
            </BasicRoute>
            <BasicRoute path="/signup">
              <Header />
              <SignUp />
            </BasicRoute>
            <Route path="/" exact >
              <Header />
              <Home />
            </Route>
          </StyledContainer>
        </Switch>
        }
      </Router>
    </div>
  );
}
const mapStateToProps= ({session})=>({
checked: session.checked
})
export default connect(mapStateToProps)(App);
