import React from 'react';
import {Link} from 'react-router-dom';

const ResultsPage = ({ searchResults, addToCart, user }) => (
    <div>
        <ol>
            {searchResults.map((item, idx) => 
                <div key={idx}>
                    {item.NameWithoutBrand} <br/>
                    <img src={item.Images.PrimaryMedium} alt="" /> <br/>
                        <div>
                        {item.Brand.Name} <br/>
                        Rating: {item.Reviews.AverageRating} <br/>
                        Retail Price: ${item.SuggestedRetailPrice} <br/>
                        {user ? <button className="Button" onClick={() => addToCart(item)}>Add To Cart</button>: null}
                        <Link to={`/products/${item.Id}`} className="Button">View Details</Link>
                        </div>
                </div>)} 
        </ol>
    </div>
)

export default ResultsPage;