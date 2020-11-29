import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../container/container.component';
import imgSrc from '../../assets/logo.svg';
import NavbarToggle from './navbar.toggle';
import './navbar.css';
import NavbarList from './navbar.list';

const Navbar = () => {
    const [active, setActive] = useState(false);
    const menuState = () => {
        setActive(!active);
    }
    return ( 
        <Container>
            <nav className="navbar">
                {/* LEFT SIDE */}
                <div className="flex justify-between w-full md:w-32 items-center">
                    <Link to="/" className="logo w-16 animate">
                        <img src={imgSrc} alt="logo" />
                    </Link>
                    <NavbarToggle active={active} menuState={menuState} />
                </div>
                {/* RIGHT SIDE */}
                <div className={`${active ? 'flex' : 'hidden'} md:flex`}>
                    <NavbarList />
                </div>
            </nav>
        </Container>
     );
}
 
export default Navbar;