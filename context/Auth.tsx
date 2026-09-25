"use client";

import { createContext, useContext, useState } from "react";

type AuthContextType = {
  loading: boolean;
  user: string | null; // for now
  login: () => void;
  register: () => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthContextProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthContextProps) {
  const [user, setUser] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const login = () => {
    setLoading(true);
  };
  const register = () => {};
  const logout = () => {};

  return <AuthContext.Provider value={{ user, loading, login, register, logout }}>{children}</AuthContext.Provider>;
}

export default function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("Error: AuthContext was used outside AuthProvider!");
  return context;
}
