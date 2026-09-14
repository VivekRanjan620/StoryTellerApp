import React, { createContext, useContext, useEffect, useState } from 'react';

import {
  getToken,
  getUser,
  saveToken,
  saveUser,
  logout as clearStorage,
} from '../storage/authStorage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // App start hone par session check
  useEffect(() => {
    restoreSession();
  }, []);

  const restoreSession = async () => {
    try {
      const token = await getToken();
      const savedUser = await getUser();

      if (token) {
        setIsLoggedIn(true);
        setUser(savedUser);
      }
    } catch (error) {
      console.log('Session Restore Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Login ke baad call hoga
  const login = async (token, userData) => {
    await saveToken(token);
    await saveUser(userData);

    setUser(userData);
    setIsLoggedIn(true);
  };

  // Logout ke baad call hoga
  const logout = async () => {
    await clearStorage();

    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        isLoggedIn,
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
