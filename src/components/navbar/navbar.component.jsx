import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../container/container.component';
import imr from '../../assets/logo.svg';

const Navbar = () => {
    return ( 
        <Container>
            <nav className="navbar">
                <div className="flex justify-between w-full md:w-32 items-center">
                    <Link to="/" className="logo w-16 animate">
                        <img src={imr} alt="logo" />
                    </Link>
                </div>
            </nav>
        </Container>
     );
}
 
export default Navbar;