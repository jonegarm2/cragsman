import React, { Component } from 'react';
import {
    Switch,
    Route,
   
} from 'react-router-dom';

import './App.css';

import NavBar from '../../components/NavBar/NavBar';
import SearchPage from '../SearchPage/SearchPage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import ResultsPage from '../ResultsPage/ResultsPage';

import userService from '../../utils/userService';
import productService from '../../utils/productAPI';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [], 
            products: [],
            // departments: [],
            // similarItems: [],
            // brands: [], 
            userSearch: "", 
            searchItems: []
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

    updateUserSearch = (e) => {
        this.setState({ 
            userSearch: e.target.value
        })
    }

    // handleSearch = () => {
    //     return (`${API}products/search~{search-term-url-encoded-with-hyphens}/?api_key=${process.env.API_KEY}`
    //    function(err, response, body) {
    //         res.render('products/results', {products: JSON.parse(body).results});
    //     }

    //     ${req.query.search}


    searchProducts = () => {
        let name = this.state.userSearch;
        let searchItems = this.state.products.filter(function(prod) {
            if (prod.Name.indexOf(name) !== -1) return true;
            return false;
        });
        this.setState({ searchItems: searchItems })
    }

    /*---------- Lifecycle Methods ---------*/

    componentDidMount() {
        let user = userService.getUser();
        this.setState({user});
        // productService.apiUtil('brands').then(result => {
        //     console.log(result.Result);
        //     // this.setState({brands: result.Result});
        // });
        // productService.apiUtil('activities').then(result => {
        //     this.setState({departments: result.Result.Children});
        // });
        productService.apiUtil('products').then(result => {
            this.setState({ products: result.Result })
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
                        <SearchPage
                            handleLogout={this.handleLogout}
                            handleLeft={this.state.leftSide}
                            similarItems={this.state.similarItems}
                            user={this.state.user}
                            departments={this.state.departments}
                            brands={this.state.brands}
                            cart={this.state.cart}
                            updateUserSearch={this.updateUserSearch}
                            userSearch={this.state.userSearch}
                            searchProducts={this.searchProducts}
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
                    <Route exact path='/results' render={(props) => 
                        <ResultsPage
                            {...props}
                            handleLogin={this.handleLogin}
                            searchItems={this.state.searchItems}
                            />
                    }/>
                </Switch>
            </div>
        );
    }
}

export default App;