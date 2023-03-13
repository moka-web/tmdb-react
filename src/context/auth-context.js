import { User } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { SignOutUser, userStateListener } from "../services/firebase";
import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({
  currentUser: {},
  setCurrentUser: (_user) => {},
  signOut: () => {}
});

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = userStateListener((user) => {
      if (user) {
        setCurrentUser(user);
      }
    });
    return unsubscribe;
  }, [setCurrentUser]);

  const signOut = () => {
    SignOutUser();
    setCurrentUser(null);
    navigate('/');
  };

  const value = {
    currentUser,
    setCurrentUser,
    signOut
  };

  

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};


export default AuthContext