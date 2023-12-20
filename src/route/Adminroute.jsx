import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { ContextAuth } from '../AuthContext/Authcontext';
import getsingleUser from '../Hook/getsingleUser';

const Adminroute = ({children}) => {
    let {user ,loader}=useContext(ContextAuth)
    let [Userinfo]=getsingleUser()

if (loader ) {
    return <span className="loading loading-bars loading-lg"></span>
}
if (user && Userinfo.role==='admin' ) {
    return  children
}

    return <Navigate  to='/login' replace></Navigate>
};

export default Adminroute;