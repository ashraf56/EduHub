import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { ContextAuth } from '../AuthContext/Authcontext';

const Privateroute = ({ children }) => {
    let { user, loader } = useContext(ContextAuth)

    if (loader) {
        return <span className="loading loading-bars loading-lg"></span>
    }
    if (user) {
        return children
    }

    return <Navigate to='/login' replace></Navigate>
};

export default Privateroute;