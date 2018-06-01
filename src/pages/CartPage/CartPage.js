import React, {Component} from 'react';

class CartPage extends Component {
    render() {
        return (
            <div>
                <h1>Cart</h1>
                {this.props.cart.map((item, idx) => 
                    <div key={idx}>
                        {item.desc} <br/>
                        <img src={item.imgUrl} alt="" /> <br/>
                        <div>
                            {item.brand} <br/> 
                            {item.rating} <br/>
                            {item.price} <br/>
                            <button className="removeButton" onClick={() => this.cart.removeFromCart(item.Id)}> Remove from Cart</button>
                        </div>
                    </div>
                )} 
            </div>
        );
    }
}

export default CartPage;