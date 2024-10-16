// src/context/AuthContext.tsx
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/app/config/firebase";
import { admins } from "@/app/constant";
interface CustomFields {
  isAdmin: boolean;
}
type LoginUser = User & CustomFields;
interface AuthContextType {
  currentUser: LoginUser | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<LoginUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        console.log('useruser',user);
        if(user){
            setCurrentUser({
              ...user,
              isAdmin: admins.includes(user?.email ?? "") ? true : false,
            } as LoginUser);

        }
        else{
            setCurrentUser(null);
            
        }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
