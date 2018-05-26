import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    //Redirect
} from 'react-router-dom';
import'./App.css';
import HomePage from '../HomePage/HomePage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }

    /*------ CallBack Methods ---------*/

    handleLogout = () => {
        userService.logout();
        this.setState({user: null});
    }

    handleSignup = () => {
        this.setState({user: userService.getUser()});
    }

    handleLogin = () => {
        this.setState({user: userService.getUser()});
    }

    /*---------- Lifecycle Methods ---------*/

    componentDidMount() {
        let user = userService.getUser();
        this.setState({user});
    }

    render() {
        return (
            <div>
                <header>Cragsman</header>
                <Router>
                    <Switch>
                        <Route exact path='/' render={() =>
                            <HomePage
                                handleLogout={this.handleLogout}
                            />
                        }/>
                        <Route exact path='/signup' render={(props) => 
                            <SignupPage
                                {...props}
                                handleSignup={this.handleSignup}
                            />
                        }/>
                        <Route exact path='/login' render={(props) => 
                            <LoginPage
                                {...props}
                                handleLogin={this.handleLogin}
                             />
                        }/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;