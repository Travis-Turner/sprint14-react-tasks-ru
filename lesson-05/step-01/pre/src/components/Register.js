import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Register.css';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      calGoal: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value 
    });
  }
  handleSubmit = () => {
    // registration handler here
  }
  render(){
    return (
      <div className="register">
        <p className="register__welcome">
            Please register.
        </p>
        <form className="register__form">
          <label>
            Username:
          </label>
          <input name="username" type="text" value={this.state.username} onChange={this.handleChange} />
          <label>
            Email:
          </label>
          <input name="email" type="email" value={this.state.email} onChange={this.handleChange} />
          <label>
            Password:
          </label>
          <input name="password" type="password" value={this.state.password} onChange={this.handleChange} />
          <label>
            Confirm password:
          </label>
          <input name="confirmPassword" type="password" value={this.state.confirmPassword} onChange={this.handleChange} />
          <label>
            Daily calorie goal:
          </label>
          <input name="calGoal" type="number" value={this.state.calGoal} onChange={this.handleChange} />
        </form>
        <div className="register__button-container">
          <button onClick={this.handleSubmit} className="register__link">Sign up</button>
        </div>
        <div className="register__signin">
          <p>Already have an account?</p>
          <Link to="login" className="register__login-link">Log in here</Link>
        </div>
        </div>
  );
  }

}

export default Register;