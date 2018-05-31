import React from 'react'; 
import { render} from 'react-dom'; 
import {
    BrowserRouter as Router, 
    Route
} from 'react-router-dom';
import App from './pages/App/App.jsx';
import './index.css';

render((
    <Router>
        <Route render={ (props) => <App history={props.history} />} />
    </Router>), document.getElementById('root'));
