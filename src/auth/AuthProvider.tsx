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
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    useEffect(()=>{
        const accessToken=window.localStorage.getItem("accessToken")
        const authenticated=window.localStorage.getItem("isAuthenticated")
        if (accessToken && authenticated === "true") {
            setIsAuthenticated(true);  
        } else {
            setIsAuthenticated(false); 
        }
    },[])




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
