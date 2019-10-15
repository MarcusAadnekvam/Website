import React from 'react';
import { Link } from 'react-router-dom';
import cout from './svg/cout.svg';

   // <img src={cout} className="cout" href="/"/>
            //<a href={'#/'}>
                
            //</a>

function Nav(){

    const navStyle = {
        color: 'white'
    }
    return (
        <nav>
            <img src={cout} />
            <ul className="nav-links">  
                <Link style={navStyle} to="/" exact>
                 <li>Home</li>
                </Link>
                <Link style={navStyle} to="/about">
                 <li>About</li>
                </Link>
                <Link style={navStyle} to="/projects">
                    <li>Projects</li>
                </Link>
                <Link style={navStyle} to="/hubcap">
                    <li>Hubcap Demo</li>
                </Link>
            </ul>
        </nav>
    );
}


export default Nav;
