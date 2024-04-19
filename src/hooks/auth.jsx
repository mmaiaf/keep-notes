import { useContext, createContext } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

export function AuthProvider({ children }){

    async function signIn({ email, password }) {
        
        try {
            const response = await api.post("/sessions", { email, password });
            console.log(response)
        } catch(error){
            if(error.message){
                alert(error.response.data.message)
            } else {
                alert("Não foi possível fazer login.")
            };
        };
    };


    return(
        <AuthContext.Provider value={{ signIn }}>
            {children}
        </AuthContext.Provider>
    )
};

export function useAuth(){
    const context = useContext(AuthContext);

    return context;
};