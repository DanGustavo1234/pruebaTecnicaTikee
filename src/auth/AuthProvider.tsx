import { createContext,useContext,useEffect,useState} from "react";




interface AuthProviderProps {
    children: React.ReactNode;
}

interface AuthContextType {
    isAuthenticated: boolean;
    setIsAuthenticated: (value: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({children}:AuthProviderProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
        return localStorage.getItem("estado") === "true";
    });

    useEffect(() => {
        localStorage.setItem("estado", JSON.stringify(isAuthenticated));
      }, [isAuthenticated]);


  return <AuthContext.Provider value={{isAuthenticated,setIsAuthenticated}}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth debe usarse dentro de un AuthProvider");
    }
    return context;
};


export default AuthProvider
