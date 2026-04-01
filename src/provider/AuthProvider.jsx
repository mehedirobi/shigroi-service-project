import React, { createContext } from 'react';

export const AuthContext = createContext();

const AuthProvider = () => {
    return <AuthContext></AuthContext> ;
};

export default AuthProvider;