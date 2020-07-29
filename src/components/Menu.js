import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/bookdetail/1">Bookdetail</Link></li>
                <li><Link to="/areadetail/1">Areadetail</Link></li>
                <li><Link to="/about/1">About</Link></li>
            </ul>
            <hr/>
        </div>
    );
};

export default Menu;