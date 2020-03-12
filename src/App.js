import React from 'react';
import './Assets/font-awesome.min.css';
import './Assets/bootstrap.min.css';
import './Assets/style.css';
import './Assets/responsive.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Router, Switch, Route} from 'react-router-dom';
import {history} from './history';
import Register from './Auth/Register';
import Home from './Home';
import Pages from './Pages/Pages';

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
