import { createContext, useState } from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState(false);

    const navigate = useNavigate(); 

    const handleAuth = (email, password) => {
        if (email === "admin@email.com" && password === "123456") {
            setAuth(true);
            console.log(true);
        }
    }

    const data = { auth, handleAuth }
    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

export { AuthProvider }

export default AuthContext
