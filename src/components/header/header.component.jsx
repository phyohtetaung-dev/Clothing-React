import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from './../../firebase/firebase.utils';
import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className="header">
        <BrowserRouter>
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
        </BrowserRouter>
        <div className="options">
            <BrowserRouter>
                <Link className="option" to="/shop">
                    SHOP
                </Link>
            </BrowserRouter>
            <BrowserRouter>
                <Link className="option" to="/shop">
                    CONTACT
                </Link>
            </BrowserRouter>
            {
                currentUser ?
                    <div className="option" onClick={auth.signOut()}> SIGN OUT </div>
                    :
                    <BrowserRouter>
                        <Link className="option" to="/signin"> SIGN IN </Link>
                    </BrowserRouter>
            }
        </div>

    </div>
)

export default Header;