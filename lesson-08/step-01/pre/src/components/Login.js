import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as auth from '../auth.js';
import './styles/Login.css';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
  handleChange(e) {
    const {name, value} = e.target;
    this.setState({
      [name]: value 
    });
  }
  handleSubmit(){
    // you'll need to add your login code here
    if (!this.state.username || !this.state.password){
      return;
    }
    auth.authorize(this.state.username, this.state.password)
    .then((data) => {
      // you need to check if the data has a jwt
      // reset the state then in the callback, set the 
      // parent App's loggedIn state to true, 
      // then redirect to '/diary'
    })
    .catch(err => console.log(err));
  }
  render(){
    return(
      <div className="login">
        <p className="login__welcome">
          Welcome back!
        </p>
        <form className="login__form">
          <label>
            Username:
          </label>
          <input required name="username" type="text" value={this.state.username} onChange={this.handleChange} />
          <label>
            Password:
          </label>
          <input required name="password" type="password" value={this.state.password} onChange={this.handleChange} />
        </form>
        <div className="login__button-container">
          <button onClick={this.handleSubmit} className="login__link">Log in</button>
        </div>
        <div className="login__signup">
          <p>Ready to begin your journey?</p>
          <Link to="/register" className="signup__link">Sign up here</Link>
        </div>
      </div>
    )
  }
}

export default withRouter(Login);