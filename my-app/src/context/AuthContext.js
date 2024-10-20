import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        const authData = JSON.parse(localStorage.getItem("authData"))
        const isAuth = authData?.authenticated === true;
        return isAuth;
    });
    const [user, setUser] = useState(() => {
        const storedUser = JSON.parse(localStorage.getItem("authData"))
        return storedUser ? storedUser.userDetails : null;
    });
    const checkAuthStatus = () => {
        const authData = JSON.parse(localStorage.getItem("authData"))
        const isAuth = authData?.authenticated;
        setIsAuthenticated(isAuth);
        if (isAuth && authData.userDetails) {
            setUser(authData.userDetails);
        }
    };


    const loginAndSaveTheUser = (response) => {
        console.log(response) 
        if (Object.keys(response).length > 0) {
            setUser(response)
            setIsAuthenticated(true)
        }
    };

    const logoutTheUser = () => {
        setIsAuthenticated(false);
        setUser(null);
        localStorage.removeItem("authData");
    };

    useEffect(() => {
        checkAuthStatus();
    }, []);


    return (
        <AuthContext.Provider value={{ isAuthenticated, user, loginAndSaveTheUser, logoutTheUser }}>
            {children}
        </AuthContext.Provider>
    );
};
