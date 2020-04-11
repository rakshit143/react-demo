import React, {Component} from 'react';
import "./login.css";
import { userService } from './auth-funtion.js';

class Login extends Component  {

  constructor(props){

    super(props);
    this.state = { username: '', password: '', errors: {}, submitted: false};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

   handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;

    // stop here if form is invalid
    if (!this.validateForm()) {
      this.setState({ error: null})
      return;
    }

    const {user, error} = userService.login(username, password)
    if(user !== null) {
      const { from } = this.props.location.state || { from: { pathname: "/" } };
      this.props.history.push(from);
    } else {
      this.setState({ error})
    }
  }

  validateForm() {

      let errors = {};
      let formIsValid = true;

      if (!this.state.username) {
        formIsValid = false;
        errors["username"] = "*Please enter your username.";
      }

      if (!this.state.password) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }

      this.setState({
        errors: errors
      });
      return formIsValid;


    }

  render () {
    return (
      <div className="container">
        <div className="errorMsg">{this.state.error}</div>
        <form onSubmit={this.handleSubmit}>
          <h4>Welcome Login!</h4>
          <div className='form-group row'>
            <input className='input' type='text' name="username" value={this.state.username} onChange={this.handleChange} placeholder='Email'/>
            <div className="errorMsg">{this.state.errors.username}</div>
          </div>
          <div className='form-group row'>
            <input className='input' type='password' name="password" value={this.state.password} onChange={this.handleChange} placeholder='Password'/>
            <div className="errorMsg">{this.state.errors.password}</div>
          </div>
          <input className="submit" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Login;
