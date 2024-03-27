import React, { createContext, useContext, useState } from 'react';

interface User {
  id: number;
  firstName: string;
  email: string;
  password: string;
}

interface AuthContextType {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  handleSignup: (newUser: User) => void;
  handleLogin: (email: string, password: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignup = (newUser: User) => {
    setUsers([...users, newUser]);
  };

  const handleLogin = (email: string, password: string) => {
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      setIsLoggedIn(true);
    } else {
      console.log('Invalid credentials');
    }
  };

  return (
    <AuthContext.Provider value={{ users, setUsers, isLoggedIn, setIsLoggedIn, handleSignup, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
