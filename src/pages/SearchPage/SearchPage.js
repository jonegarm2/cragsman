import React from 'react';
import { Link } from 'react-router-dom';

const SearchPage = ({ userSearch, updateUserSearch, searchProducts }) => (
    <div className="SearchPage">
       <input type="text" value={userSearch} onChange={updateUserSearch}/>
       <button onClick={searchProducts}>Search</button>
       <Link to="/results">Results</Link>
    </div>
);

export default SearchPage;
