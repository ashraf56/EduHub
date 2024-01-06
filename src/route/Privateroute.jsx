import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { ContextAuth } from '../AuthContext/Authcontext';

const Privateroute = ({ children }) => {
    let { user, loader } = useContext(ContextAuth)

    if (loader) {
        return <div className='text-center justify-center items-center mt-10 min-h-screen'> <span className="loading loading-ring loading-lg text-center justify-center"></span></div>
    }
    if (user) {
        return children
    }

    return <Navigate to='/login' replace></Navigate>
};

export default Privateroute;