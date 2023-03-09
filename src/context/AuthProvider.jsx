import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
export const AuthContext = createContext(null);

const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    const [theme, setTheme] = useState(false);

    // Modal 
    const [modalIsOpen, setModalIsOpen] = useState(false);
    console.log(modalIsOpen);

    const OpenModal = () => {
        setModalIsOpen(true)
    }

    const closeModal = () => {
        setModalIsOpen(false)
    }

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
        localStorage.setItem("theme", !theme)
    }
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
        modalIsOpen,
        OpenModal,
        closeModal,
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