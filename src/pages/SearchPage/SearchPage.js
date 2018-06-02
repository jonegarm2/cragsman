import React from 'react';
import './SearchPage.css';

const SearchPage = ({ userSearch, updateUserSearch, searchProducts }) => (
    <div className="SearchPage">
       <input className="SearchInput" type="text" value={userSearch} placeholder="Search For Gear" onChange={updateUserSearch}/>
       <button className="SearchButton" onClick={searchProducts}>Search</button>
    </div>
);

export default SearchPage;
