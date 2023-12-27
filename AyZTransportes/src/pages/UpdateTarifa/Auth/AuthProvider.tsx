import { onAuthStateChanged } from "firebase/auth";
import React, { ReactNode, useEffect, useState } from "react";
import { auth } from "../../../firebase";

interface AuthContextType {
  currentUser: String | null;
}

export const AuthContext = React.createContext<AuthContextType>({
  currentUser: null,
});

interface AuthProviderProps {
  children: ReactNode;
}
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<String | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user?.email || null);
      setLoading(false);
    });

    // Clean up the listener when unmounting
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    console.log(currentUser); // Log whenever currentUser changes
  }, [currentUser]); // This useEffect will trigger whenever currentUser changes

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
        }}
      >
        <h1>Loading User...</h1>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
