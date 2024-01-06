import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { ContextAuth } from '../AuthContext/Authcontext';
import getsingleUser from '../Hook/getsingleUser';
import getAdmin from '../Hook/getAdmin';

const Adminroute = ({ children }) => {
    let { user, loader } = useContext(ContextAuth)
    let [isAdmin, adminloading] = getAdmin()

    if (loader || adminloading) {
        return <div className='text-center justify-center items-center mt-10 min-h-screen'> <span className="loading loading-ring loading-lg text-center justify-center"></span></div>
    }
    if (user && isAdmin) {
        return children
    }

    return <Navigate to='/login' replace></Navigate>
};

export default Adminroute;