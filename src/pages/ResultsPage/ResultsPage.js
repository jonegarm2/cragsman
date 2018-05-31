import React from 'react';

const ResultsPage = ({ searchResults, addToCart, user }) => (
    <div>
        <ol>
            {searchResults.map((item, idx) => 
                <div key={idx}>
                    {item.NameWithoutBrand} <br/>
                    <img src={item.Images.PrimaryMedium} alt="" /> <br/>
                        <div>
                        {item.Brand.Name} <br/>
                        {item.Reviews.AverageRating} <br/>
                        {item.SuggestedRetailPrice} <br/>
                        {user ? <button  className="CartButton" onClick={() => addToCart(item)}>Add To Cart</button>: null}
                        </div>
                </div>)} 
        </ol>
    </div>
)

export default ResultsPage;