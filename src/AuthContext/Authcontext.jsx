import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';

import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile, } from "firebase/auth";
const auth = getAuth(app);
export let ContextAuth = createContext();

const Authcontext = ({ children }) => {

    let [user, setUser] = useState(null);
    let [loader, setLodaer] = useState(true);


    let Createuser = (email, password) => {
        setLodaer(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    let logout = () => {
        return signOut(auth);
    }


    let Login = (email, password) => {
        setLodaer(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    let updateUser = (name) => {

        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }

    useEffect(() => {
        let Unsubscribe = onAuthStateChanged(auth,
            CurrentUser => {
                setUser(CurrentUser);
                setLodaer(false);
            }
        )

        return () => {
            Unsubscribe();
        }

    }, [])

    const value = {
        user, Createuser, Login, logout, loader, updateUser
    }

    return (

        <ContextAuth.Provider value={value} >
            {children}
        </ContextAuth.Provider>
    );
};

export default Authcontext;