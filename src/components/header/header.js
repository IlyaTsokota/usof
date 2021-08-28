import React from 'react';
import './header.scss';
import HeaderSearch from "../header-search";
import HeaderContainer from 'Containers/header-container';

const HeaderLogo = ({ history }) => (
    <div
        className="header__logo"
        onClick={() => history.push('/')}>
        USOF
    </div>
);

const HeaderNav = (props) => (
    <nav>
        <HeaderSearch />
        <HeaderContent {...props} />
    </nav>
);

const HeaderContent = ({ user, history }) => {
    if (!user) {
        return (
            <div className="header__links">
                <button className="btn btn-mini btn-green" onClick={() => history.push('/login')}>Sign In</button>
                <button className="btn btn-mini btn-blue" onClick={() => history.push('/register')}>Sign Up</button>
            </div>
        );
    }

    const { icon, login } = user;
    return (
        <div className="header__profile">
            <div className="header__profile-img">
                <img src={icon} alt={login} />
                <p>{login}</p>
            </div>
        </div>
    );
};

const Header = () => (
    <HeaderContainer>
        <HeaderLogo />
        <HeaderNav />
    </HeaderContainer>
);

export default Header;