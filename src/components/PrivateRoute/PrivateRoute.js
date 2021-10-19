import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

// -------------------------imported-----------

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    // ------------------------------------------

    // you should wait few-----------------


    if (isLoading) {
        return ("pleases wait............")
    }
    // ----------------------------
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );





};
export default PrivateRoute;
