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
import CartPage from '../CartPage/CartPage';

import userService from '../../utils/userService';
//import productService from '../../utils/productAPI';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [], 
            products: [], 
            userSearch: "", 
            searchItems: [],
            searchResults: [],
            showCart: false, 
            photos: [
                'https://i.imgur.com/KPzaGMr.png',
                'https://i.imgur.com/GIfTRFS.png',
                'https://i.imgur.com/v2MCxBa.png',
                'https://i.imgur.com/Y8ofY6A.png',
                'https://i.imgur.com/w5JBne8.png'
            ]
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

    searchProducts = () => {
        fetch('api/products/search', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({search: this.state.userSearch})
        })
        .then(data => data.json())
        .then(searchResults => {
            this.setState( {searchResults: searchResults} )
            this.props.history.push('/results')
        })
        .catch(err => console.log(err))
    }

    addToCart = (newItem) => {
        let cartCopy = [...this.state.cart]
        cartCopy.push(newItem)
        this.setState({
            cart: cartCopy
        })
    }

    removeFromCart = (id) => {
        let cartIdx = this.state.cart.findIndex(function(elem) {
            return elem.Id === id
        })
        let cartCopy = [...this.state.cart]
        cartCopy.splice(cartIdx, 1)
        this.setState({
            cart: cartCopy
        })

    }



    /*---------- Lifecycle Methods ---------*/

    componentDidMount() {
        let user = userService.getUser();
        this.setState({user});
    }


    render() {
        return (
            <div>
                <NavBar
                    user={this.state.user}
                    handleLogout={this.handleLogout}
                />  
                <SearchPage
                            handleLogout={this.handleLogout}
                            user={this.state.user}
                            cart={this.state.cart}
                            updateUserSearch={this.updateUserSearch}
                            userSearch={this.state.userSearch}
                            searchProducts={this.searchProducts}
                            addToCart={this.addToCart}
                        />
                <Switch>
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
                            searchResults={this.state.searchResults}
                            user={this.state.user}
                            addToCart={this.addToCart}
                            />
                    }/>
                    <Route exact path='/cart' render={(props) =>
                        <CartPage
                            {...props}
                            handleLogin={this.handleLogin}
                            cart={this.state.cart}
                            removeFromCart={this.removeFromCart}
                        />
                    }/>
                </Switch>
            </div>
        );
    }
}

export default App;