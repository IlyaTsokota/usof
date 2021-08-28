import React from 'react';
import './header-container.scss';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const HeaderContainer = ({ user, children }) => {
    const history = useHistory();

    return (
        <div className="header">
            <div className="container">
                <div className="header__inner">
                    {
                        React.Children.map(children, (child) => {
                            return React.cloneElement(child, { user, history });
                        })
                    }
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({ user }) => {
    return { user };
};

export default connect(mapStateToProps)(HeaderContainer);
