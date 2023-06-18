import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase'
import { json } from 'react-router-dom';
export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    const [theme, setTheme] = useState(false);
    console.log(theme);
    useEffect(() => {
        const rootElement = window.document.documentElement;
        if (theme) {
            rootElement.classList.add("dark")
            rootElement.classList.remove("light")
        } else {
            rootElement.classList.add("light")
            rootElement.classList.remove("dark")
        }
        const storedTheme = JSON.parse(localStorage.getItem("theme"));
        setTheme(storedTheme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(!theme)

        // save the value to the local storage
        localStorage.setItem("theme", !theme)

    }
    console.log(user);
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

    const authInfo = {
        user,
        loader,
        auth,
        theme,
        SignIn,
        toggleTheme,
        setLoader,
        logOut,
        createUser,
        userProfile,
        signInEmailPassword
    };
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;