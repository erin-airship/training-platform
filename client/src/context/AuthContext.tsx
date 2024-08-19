import { createContext, useState, useContext, useEffect } from "react";
import storage from "../utils/storage";
import { jwtDecode } from "jwt-decode";

type User = {
  id: string;
  email?: string;
};

interface IAuthContext {
  isLoggedIn: boolean;
  user: User | null;
  logout: () => void;
  setUserToken: (token: string) => void;
}

export const AuthContext = createContext<IAuthContext>({
  isLoggedIn: false,
  user: null,
  logout: () => {},
  setUserToken: () => {},
});

export const AuthProvider = ({ children }) =>{
    const [user, setUser] = useState<User | null>(null);
    const token = storage.getToken();
    const isLoggedIn = Boolean(token);
  
    const setUserToken = (accessToken: string) => {
      const decoded = jwtDecode(accessToken);
      if (decoded.sub && decoded.exp) {
        if (Date.now() >= decoded.exp * 1000) {
          storage.clearToken();
          setUser(null);
          return;
        }
        return setUser({ id: decoded.sub });
      } else {
        setUser(null);
      }
    };
  
    useEffect(() => {
      if (token) setUserToken(token);
    }, [token]);
  
    function logOut() {
      setUser(null);
      storage.clearToken();
    }
    return (
      <AuthContext.Provider value={{ isLoggedIn, user, logout: logOut, setUserToken }}>
        {children}
      </AuthContext.Provider>
    );
  }

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("useAuth has to be used within <AuthContext.Provider>");
  }

  return authContext;
};
