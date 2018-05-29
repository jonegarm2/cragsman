import React from 'react';
import {Link} from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import MainBody from '../../components/MainBody/MainBody';
import LeftSide from '../../components/LeftSide/LeftSide';
import SimilarItems from '../../components/SimilarItems/SimilarItems';

const HomePage = (props) => {
    return (
        <div className="HomePage">
            <NavBar user={props.user} 
                handleLogout={props.handleLogout} />
            {/* <div className="MainBody"> */}
                {/* <MainBody /> */}
        </div>
    );
}

export default HomePage;
