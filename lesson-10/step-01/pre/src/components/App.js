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
    this.handleTokenCheck = this.handleTokenCheck.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  componentDidMount(){
    this.handleTokenCheck();
  }
  handleTokenCheck(){
    if (localStorage.getItem('jwt')){
    let jwt = localStorage.getItem('jwt');
    auth.checkToken(jwt).then((res) => {
      if (res){
        this.setState({
          loggedIn: true,
        }, () => {
          this.props.history.push("/diary");
        });
      }
    }); 
  }
  }
  handleLogin (){
    this.setState({
      loggedIn: true
    })
  }
  handleLogout (){
    // handle the log out here
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
