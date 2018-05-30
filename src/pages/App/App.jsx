import React, {Component} from 'react';
import {
    Switch,
    Route,
    //Redirect
} from 'react-router-dom';
import './App.css';
import HomePage from '../HomePage/HomePage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import productService from '../../utils/productAPI';
import NavBar from '../../components/NavBar/NavBar';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [], 
            products: [],
            departments: [],
            similarItems: [],
            brands: []
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
        productService.apiUtil('brands').then(result => {
            this.setState({brands: result.Result});
        });
        productService.apiUtil('activities').then(result => {
            this.setState({departments: result.Result.Children});
        });
    }


    render() {
        return (
            <div>
                <NavBar
                    user={this.state.user}
                    handleLogout={this.handleLogout}
                />
                <Switch>
                    <Route exact path='/' render={() =>
                        <HomePage
                            handleLogout={this.handleLogout}
                            handleLeft={this.state.leftSide}
                            similarItems={this.state.similarItems}
                            user={this.state.user}
                            departments={this.state.departments}
                            brands={this.state.brands}
                            cart={this.state.cart}
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
            </div>
        );
    }
}

export default App;