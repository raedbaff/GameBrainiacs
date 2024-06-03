'use client';

import { useSession } from 'next-auth/react';
import { createContext, useContext, useEffect, useState } from 'react';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [GlobalUser, setGlobalUser] = useState(null);
  const { data: session } = useSession();

  // Moved inside the function

  const fetchUserInfo = async () => {
    try {
      const response = await fetch(`/api/user?email=${session.user.email}`);

      if (!response.ok) {
        console.log(response);
        return;
      }

      const userData = await response.json();
      setGlobalUser(userData.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (session && !GlobalUser) {
      fetchUserInfo();
    }
  }, [session]);

  return (
    <AuthContext.Provider value={{ GlobalUser, fetchUserInfo }}>
      {children}
    </AuthContext.Provider>
  );
};
export function useAuth() {
  return useContext(AuthContext);
}
