import React from 'react';

const SearchPage = ({ userSearch, updateUserSearch, searchProducts }) => (
    <div className="SearchPage">
       <input type="text" value={userSearch} onChange={updateUserSearch}/>
       <button onClick={searchProducts}>Search</button>
    </div>
);

export default SearchPage;
