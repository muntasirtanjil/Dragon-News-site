import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: 'PH ',
        email: "ph@gmail.com"
    });

    const authData = {
        user,
        setUser
    };

    return <AuthContext value={authData}>
        {children}
    </AuthContext>;

};

export default AuthProvider;