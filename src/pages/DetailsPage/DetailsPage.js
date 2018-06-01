import React from 'react';

const DetailsPage = ({searchResults, addToCart, user}) => {
    return(
        <div>
            {this.state.details.map((item, idx) => 
                <div key={idx}>
                    {item.NameWithoutBrand} <br/>
                    <img src={item.Images.PrimaryExtraLarge} alt="" /> <br/>
                        <div>
                        {item.Brand.Name} <br/>
                        Rating: {item.Reviews.AverageRating} <br/>
                        Retail Price: ${item.SuggestedRetailPrice} <br/>
                        {user ? <button className="Button" onClick={() => addToCart(item)}>Add To Cart</button>: null}
                        </div>
                </div>)} 
        </div>
    )
}

export default DetailsPage;