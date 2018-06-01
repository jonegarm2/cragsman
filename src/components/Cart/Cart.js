import React from 'react';
import './Cart.css';


// This will be the array on the right that shows you what is in your cart
// ternary that will show Log in to add to cart and the other will be whats in the cart

const Cart = (props, removeFromCart) => {
  return(
      <div>
          <ol>
              {this.state.cart.map((item, idx) => 
                  <div key={idx}>
                      {item.NameWithoutBrand} <br/>
                      <img src={item.Images.PrimaryMedium} alt="" /> <br/>
                          <div>
                          {item.Brand.Name} <br/>
                          {item.Reviews.AverageRating} <br/>
                          {item.SuggestedRetailPrice} <br/>
                          <button className="Button" onClick={removeFromCart}>Remove from Cart</button>
                          </div>
                  </div>)} 
          </ol>
      </div>
  )
}
//     let nav = props.user ?
//       <div className="Cart">
//         <span className='Cart-home'>{props.user.name}'s Cart</span>
//         &nbsp;&nbsp;|&nbsp;&nbsp;

   
//       :
//       <div className="Cart">
//         Sign in to Add to Cart! 
//       </div>;
  
      
  
//     return (
//       <div className='Cart'>
//         {nav}
//       </div>
//     );
//   };

export default Cart;