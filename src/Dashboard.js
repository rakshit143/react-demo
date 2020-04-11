import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { userService } from './auth-funtion.js';

class Dashboard extends Component {
	constructor(props) {
        super(props);

        this.state = {
            loginuser: {}
        };
    }

	componentDidMount() {
        this.setState({ 
            loginuser: JSON.parse(localStorage.getItem('user')),
        });
    }
  render() {
    const { loginuser } = this.state;
    return (
        <div className="col-md-6 col-md-offset-3">
            <h1>Hi {loginuser.username}!</h1>
            <p>You're logged in with React & Basic HTTP Authentication!!</p>
            <p>
                <Link to="/login">Logout</Link>
            </p>
        </div>
    );
  }
}

export default Dashboard;