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
import DetailsPage from '../DetailsPage/DetailsPage';

import userService from '../../utils/userService';
import tokenService from '../../utils/tokenService';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // products: [],
            cart: [],
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
        this.setState({user: null, cart: []});
    }

    handleSignup = () => {
        this.setState({user: userService.getUser()});
        this.loadCart();
    }

    handleLogin = () => {
        this.setState({user: userService.getUser()});
        this.loadCart();
    }

    updateUserSearch = (e) => {
        this.setState({ 
            userSearch: e.target.value
        })
    }

    searchProducts = () => {
        fetch(`${window.location.protocol}//${window.location.href.split("/")[2]}/api/products/search`, {
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

    loadCart = () => {
        fetch('/api/users/cart', {
            headers: {
                "Authorization": "Bearer " + tokenService.getToken()
            }
        }).then(res => res.json())
        .then(cart => {
            this.setState({cart});
        });
    }

    addToCart = (newItem) => {
        console.log(newItem)
        fetch(`${window.location.protocol}//${window.location.href.split("/")[2]}/userapi/users/cart`, {
            method: 'POST',
            headers: {
                "Authorization": "Bearer " + tokenService.getToken(),
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                apiId: newItem.Id,
                brand: newItem.Brand.Name,
                name: newItem.Name,
                desc: newItem.NameWithoutBrand,
                rating: newItem.Reviews.AverageRating,
                imgUrl: newItem.Images.PrimaryMedium,
                bigImgUrl: newItem.Images.PrimaryExtraLarge,
                price: newItem.SuggestedRetailPrice
            })
        })
        .then(res => res.json())
        .then(cart => {
            this.setState({cart});
        })
    }

    removeFromCart = (itemId) => {
        console.log(itemId)
        fetch(`api/users/cart/products/${itemId}`, {
            method: 'DELETE',
            headers: {
                "Authorization": "Bearer " + tokenService.getToken(),
            },
        })
        .then(res => res.json())
        .then(cart => {
            this.setState({cart});
            this.props.history.push('/cart');
        })
    }



    /*---------- Lifecycle Methods ---------*/

    componentDidMount() {
        let user = userService.getUser();
        this.setState({user});
        if (user) this.loadCart();
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
                            searchResults={this.state.searchResults}
                            user={this.state.user}
                            addToCart={this.addToCart}
                            />
                    }/>
                    <Route exact path='/cart' render={(props) =>
                        <CartPage
                            {...props}
                            cart={this.state.cart}
                            removeFromCart={this.removeFromCart}
                        />
                    }/>
                    <Route exact path='/products/:id' render={(props) =>
                        <DetailsPage
                            addToCart={this.addToCart}
                            user={this.state.user}
                            item={this.state.searchResults.find(item => item.Id === props.match.params.id)}
                        />
                    }/>
                </Switch>
            </div>
        );
    }
}

export default App;