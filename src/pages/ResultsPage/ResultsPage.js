import React from 'react';

const ResultsPage = ({ searchResults, addToCart }) => (
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
                        <button className="CartButton" onClick={addToCart}>Add To Cart</button>
                        </div>
                </div>)} 
        </ol>
    </div>
)

export default ResultsPage;