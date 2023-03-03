import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
const AuthContext = createContext(null);

const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    // create user with email password
    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign in with email and password
    const signInEmailPassword = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // Sign in with social media
    const SignIn = (provider) => {
        setLoader(true)
        return signInWithPopup(auth, provider);
    }
    // Sign Out
    const logOut = () => {
        return signOut(auth);
    }

    // update User Profile
    const userProfile = (profile) => {
        setLoader(true)
        return updateProfile(auth.currentUser, profile)
    }

    // Users
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoader(false)
        })
        return () => unsubscribe();
    }, [])

    return (
        <div>
            <AuthContext.Provider>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;