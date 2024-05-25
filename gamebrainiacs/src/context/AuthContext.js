'use client';

import Cookies from 'js-cookie';
import { createContext, useContext, useState } from 'react';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Moved inside the function

  const login = username => {
    setUser(username);
    Cookies.set('auth-token', 'RAED COOKIE'); // Set your auth token here
  };

  const logout = () => {
    setUser(null);
    Cookies.remove('auth-token'); // Remove the auth token
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export function useAuth() {
  return useContext(AuthContext);
}
