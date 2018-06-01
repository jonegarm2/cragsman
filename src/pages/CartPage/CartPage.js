import React from 'react';

const CartPage = ({removeFromCart, cart}) => {
    return (
        <div>
            <h1>Cart</h1>
            {cart.map((item, idx) => 
                <div key={idx}>
                    {item.desc} <br/>
                    <img src={item.imgUrl} alt="" /> <br/>
                    <div>
                        {item.brand} <br/> 
                        {item.rating} <br/>
                        {item.price} <br/>
                        <button className="removeButton" onClick={() => removeFromCart(item._id)}> Remove from Cart</button>
                    </div>
                </div>
            )} 
        </div>
    );
}


export default CartPage;