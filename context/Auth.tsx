"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type UserRole = "admin" | "standard" | "professional";

interface AuthContextType {
  user: string | null;
  role: UserRole;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<string | null>(null);
  const [role, setRole] = useState<UserRole>("standard");
  const [loading, setLoading] = useState<boolean>(false);

  return <AuthContext.Provider value={{ user, role, loading }}>{children}</AuthContext.Provider>;
}

export default function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("Error: AuthContext was used outside AuthProvider!");
  return context;
}
