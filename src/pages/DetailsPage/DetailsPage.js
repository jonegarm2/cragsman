import React from 'react';

const DetailsPage = ({addToCart, user, item, searchResults}) => {
    return (
        item ? <div>
            <div>
                <h3>{item.NameWithoutBrand}</h3>
                <img src={item.Images.PrimaryExtraLarge} alt="item pic" /> <br/>
                    <div>
                        <h3>{item.Brand.Name}</h3>
                        Rating: {item.Reviews.AverageRating} <br/>
                        Retail Price: ${item.SuggestedRetailPrice} <br/>
                        {user ? <button className="Button" onClick={() => addToCart(item)}>Add To Cart</button>: null}
                    </div>
            </div> 
        </div> : <h1>Please search an item first!</h1> 
    )
}

export default DetailsPage;