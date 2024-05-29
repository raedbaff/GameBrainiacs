'use client';

import Cookies from 'js-cookie';
import { createContext, useContext, useEffect, useState } from 'react';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Moved inside the function

  useEffect(() => {
    const username = Cookies.get('Username');

    if (username) {
      setUser(username);
    } else {
      setUser(null);
    }
  }, []);

  const login = (username, token) => {
    setUser(username);
    Cookies.set('Username', username);
    Cookies.set('User-Token', token);
    return Promise.resolve();
  };

  const logout = async () => {
    setUser(null);
    Cookies.remove('Username');
    Cookies.remove('User-Token');
    return Promise.resolve();
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
