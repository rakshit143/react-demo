import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import Dashboard from './Dashboard';
import Login from './Login';

class App extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        <Router>
                            <div>
                                <PrivateRoute exact path="/" component={Dashboard} />
                                <Route path="/login" component={Login} />
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

export default App; 


