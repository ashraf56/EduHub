import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { ContextAuth } from '../AuthContext/Authcontext';
import getsingleUser from '../Hook/getsingleUser';
import getAdmin from '../Hook/getAdmin';

const Adminroute = ({children}) => {
    let {user ,loader}=useContext(ContextAuth)
    let [isAdmin,adminloading]=getAdmin()

if (loader || adminloading ) {
    return <span className="loading loading-bars loading-lg"></span>
}
if (user && isAdmin ) {
    return  children
}

    return <Navigate  to='/login' replace></Navigate>
};

export default Adminroute;