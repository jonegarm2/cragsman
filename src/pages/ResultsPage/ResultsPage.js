import React from 'react';
import {Link} from 'react-router-dom';
import './ResultsPage.css'

const ResultsPage = ({ searchResults, addToCart, user }) => (
    <div className='container'>
        <div className="row">
            {searchResults.map((item, idx) => 
                <div className="col-sm" key={idx}>
                    {item.NameWithoutBrand} <br/>
                    <img className="ResultsImg" src={item.Images.PrimaryMedium} alt="" /> <br/>
                        <div>
                        {item.Brand.Name} <br/>
                        Rating: {item.Reviews.AverageRating} <br/>
                        Retail Price: ${item.SuggestedRetailPrice} <br/>
                        {user ? <button className="Button" onClick={() => addToCart(item)}>Add To Cart</button>: null}
                        <Link to={`/products/${item.Id}`} className="Button">View Details</Link>
                        </div>
                </div>
            )} 
        </div>
    </div>
)

export default ResultsPage;