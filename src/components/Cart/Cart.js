import React from 'react';
import './Cart.css';


// This will be the array on the right that shows you what is in your cart
// ternary that will show Log in to add to cart and the other will be whats in the cart

const Cart = (props) => {
    let nav = props.user ?
      <div className="Cart">
        <span className='Cart-home'>{props.user.name}'s Cart</span>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        return props.showModal ? (
        <div className="Modal">
          <div className="Modal-content">
            <button onClick={() => props.closeModal()}>X</button>
              {props.children}
         </div>
       </div>
      </div>
    ) : null;
};  
   
      :
      <div className="Cart">
        Sign in to Add to Cart! 
      </div>;
  
      
  
    return (
      <div className='Cart'>
        {nav}
      </div>
    );
  };

export default Cart;