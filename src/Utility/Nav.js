import React from 'react';
import { Link } from 'react-router-dom';
import cout from './svg/cout.svg';
import qioLogo from './pics/Qio_Logo.png';

   // <img src={cout} className="cout" href="/"/>
            //<a href={'#/'}>
                
            //</a>

function Nav(){

    const navStyle = {
        color: 'white'
    }
    return (
        <nav>
            
            <ul className="nav-links"> 

                <Link to="/" exact>
                    <img src={qioLogo} width="50px" height="30px" />
                </Link>
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
