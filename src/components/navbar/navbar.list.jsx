import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../buttons/button.component';
import NavbarItem from './navbar.item';

const NavbarList = ({history}) => {

    // make active nav item with text primary
    const isActive = (history, path) => {
        if(history.location.pathname === path) {
            return 'text-primary';
        } else {
            return '';
        }
    }

    return ( 
        <ul className="font-bold flex-wrap flex md:mr-5 flex-col md:flex-row text-center">
            <NavbarItem link="/" name="Home" listStyle={isActive(history, '/')} />
            <NavbarItem link="/shop" name="Shop" listStyle={isActive(history, '/shop')} />
            <NavbarItem link="/dashboard" name="Dashboard" listStyle={isActive(history, '/dashboard')} />
            <Button title="Signout" moreStyle="hover:text-primary" action={() => console.log('signout')} />
            <Button isButton={false} href="/cart" title="cart" moreStyle="bg-primary text-white uppercase w-24 md:ml-6" />
        </ul>
     );
}
 
export default withRouter(NavbarList);