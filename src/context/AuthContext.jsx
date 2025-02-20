import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userStorage = localStorage.getItem('user');
    if (userStorage) {
      setUser(JSON.parse(userStorage));
    }
  }, []);

  const login = (email, password) => {
    if (!email || !password) {
      return console.error('Email y contraseña son requeridos');
    }

    const userBack = {
      userName: 'Diego',
      email,
      id: 1,
      permisos: ['VER_PROFILE', 'VER_ABOUT'],
    };
    setUser(userBack);
    localStorage.setItem('user', JSON.stringify(userBack));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
