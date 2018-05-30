import React from 'react';
//import {Link} from 'react-router-dom';
import MainBody from '../../components/MainBody/MainBody';
import Cart from '../../components/Cart/Cart';

//import SimilarItems from '../../components/SimilarItems/SimilarItems';
import DepartmentList from '../../components/DepartmentList/DepartmentList';

const HomePage = (props) => {
    return (
        <div className="HomePage">
            <DepartmentList departments={props.departments} />
            <Cart cartbox={props.cartbox} />
            <div className="MainBody">

            <MainBody 
                />
            </div>
        </div>
    );
}

export default HomePage;
