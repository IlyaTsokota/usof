import React from 'react';
import './header-container.scss';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {bindActionCreators} from "redux";
import {fetchUserLogout} from "../../actions";
import {withUsofService} from "../../components/hoc";

const HeaderContainer = ({ user, onLogout, children }) => {
    const history = useHistory();

    return (
        <div className="header">
            <div className="container">
                <div className="header__inner">
                    {
                        React.Children.map(children, (child) => {
                            return React.cloneElement(child, {
                                user,
                                history,
                                onLogout
                            });
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

const mapDispatchToProps = (dispatch, { usofService }) => {
    return bindActionCreators(
        {
            onLogout: fetchUserLogout(usofService.logout),
        },
        dispatch
    );
};

export default withUsofService()(connect(mapStateToProps, mapDispatchToProps)(HeaderContainer));
