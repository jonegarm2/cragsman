import React from 'react';

const CartPage = ({cart, removeFromCart}) => (
    <div>
        {cart.map((item, idx) => 
            <div key={idx}>
                {item.NameWithoutBrand} <br/>
                <img src={item.Images.PrimaryMedium} alt="" /> <br/>
                    <div>
                    {item.Brand.Name} <br/> 
                    {item.Reviews.AverageRating} <br/>
                    {item.SuggestedRetailPrice} <br/>
                    <button className="removeButton" onClick={() => removeFromCart(item.Id)}> Remove from Cart</button>
                    </div>
            </div>)} 
    </div>
)

export default CartPage