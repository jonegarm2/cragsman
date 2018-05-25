import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import userService from '../../utils/userService';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pw: ''
        }
    }
    render() {
    }
}

export default LoginForm;