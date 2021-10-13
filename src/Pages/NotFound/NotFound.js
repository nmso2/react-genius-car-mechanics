import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import img from '../../images/404.png'

const NotFound = () => {
    return (
        <div>
            <img className="img-fluid" width="100%" src={img} alt="" />
            <Link to='/home'><Button >Go back</Button></Link>
        </div>
    );
};

export default NotFound;