import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Menu.module.css';

const Menu = () => {
    return (
        <div className={classes.navMenuContainer}>
            <h1>BookTravel</h1>
            <ul className={classes.navMenu}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/bookdetail/1'>Bookdetail</Link>
                </li>
                <li>
                    <Link to='/areadetail/1'>Areadetail</Link>
                </li>
                <li>
                    <Link to='/about/1'>About</Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
