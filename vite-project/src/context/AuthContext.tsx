// Steps to follow
// 1. creating context
// 2. providing context
// 3. consuming context

import { createContext, useMemo, useCallback } from "react";
import { type AuthContextType } from "../types/posts.types";
import { useState } from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: AuthProviderProps) {
  const [authenticationState, setAuthenticationState] =
    useState<boolean>(false);

  // 1. Freeze the functions in memory using useCallback
  const loginFunc = useCallback(() => {
    setAuthenticationState(true);
  }, []); // Empty array means this function reference NEVER changes

  const logoutFunc = useCallback(() => {
    setAuthenticationState(false);
  }, []);

  const value = useMemo<AuthContextType>(
    () => ({
      isAuthenticated: authenticationState,
      login: loginFunc,
      logout: logoutFunc,
    }),
    [authenticationState, loginFunc, logoutFunc], // functions are stable and safe to include here
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContext;
