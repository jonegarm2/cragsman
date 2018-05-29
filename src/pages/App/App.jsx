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
const API = 'http://api.sierratradingpost.com/api/1.0/';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            cart: [],
            product: [],
            leftSide: [],
            similarItems: [],
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

    // handleSearch = () => {
    //     return (`${API}products/search~{search-term-url-encoded-with-hyphens}/?api_key=${process.env.API_KEY}`
    //    function(err, response, body) {
    //         res.render('products/results', {products: JSON.parse(body).results});
    //     }

    //     ${req.query.search}
    

    /*---------- Lifecycle Methods ---------*/

    componentDidMount() {
        let user = userService.getUser();
        this.setState({user});
    }


    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path='/' render={() =>
                            <HomePage
                                handleLogout={this.handleLogout}
                                handleLeft={this.state.leftSide}
                                similarItems={this.state.similarItems}
                                user={this.state.user}
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