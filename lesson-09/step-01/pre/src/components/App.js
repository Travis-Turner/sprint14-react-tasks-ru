import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Header from './Header';
import Diary from './Diary';
import Tips from './Tips';
import Register from './Register';
import Login from './Login';
import NavBar from './NavBar';
import ProtectedRoute from './ProtectedRoute';
import * as auth from '../auth.js';
import './styles/App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleTokenCheck = this.handleTokenCheck.bind(this);
  }
  componentDidMount(){
    // check the token here
  }
  handleTokenCheck(){
    // check to see if there is a jwt token inside local storage
    // if so, get this token and create a variable 'jwt'
    // call the auth.checkToken() method passing this token
    // inside the following then(), if there is a res obj,
    // set loggedIn to be true
    // in the callback of this.setState, redirect the user to /diary
  }
  handleLogin (){
    this.setState({
      loggedIn: true
    })
  }
  render(){
    return (
      <>
      <Header />
      <main className="content">
        {this.state.loggedIn && <NavBar />}
        <Switch>
          <ProtectedRoute path="/diary" loggedIn={this.state.loggedIn} component={Diary} />
          <ProtectedRoute path="/tips" loggedIn={this.state.loggedIn} component={Tips} />
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login handleLogin={this.handleLogin} />
          </Route>
          <Route exact path="/">
            {this.state.loggedIn ? <Redirect to="/diary" /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </main>
      </>
  );
  }
}

export default withRouter(App);
