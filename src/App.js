import React from 'react';
import './Assets/font-awesome.min.css';
import './Assets/bootstrap.min.css';
import './Assets/style.css';
import './Assets/responsive.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Router, Switch, Route, Redirect} from 'react-router-dom';
import {history} from './history';
import Register from './Auth/Register';
import Login from './Auth/Login';
import Home from './Home';
import Pages from './Pages/Pages';
import MemberArea from './Pages/MemberArea';
import Listing from './Pages/Listing';

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

function App() {
  return (
    <React.Fragment>
      <Router history={history}>
        <Header />
          <div>
              <Switch>
                <Route path="/register">
                  <Register />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/listings">
                    <Listing />
                </Route>
                <PrivateRoute path='/profile' component={MemberArea} />
                <Route exact path="/pages/:slug" component={Pages}>
                </Route>
                <Route exact path="/">
                  <Home />
                </Route>
              </Switch>
          </div>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
