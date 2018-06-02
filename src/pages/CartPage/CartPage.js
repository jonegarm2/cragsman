import React from 'react';

const CartPage = ({removeFromCart, cart}) => {
    return (
        <div className="container">
            <div className="row">
            {cart.map((item, idx) => 
                <div className="col-sm cartItem" key={idx}>
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
        </div>
    );
}


export default CartPage;