import React from 'react'; 
import { render } from 'react-dom'; 
import App from './pages/App/App.jsx';
import './index.css';

const App = () => <div>Hello World</div>;

render(<App />, document.getElementById('root'));
