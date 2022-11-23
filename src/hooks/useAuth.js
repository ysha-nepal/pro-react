import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import axiosConfig from "../configs/axiosConfig";

const AuthContext = createContext();

export const AuthProvider = ({ children, userData }) => {
    const [user, setUser] = useLocalStorage("user", userData);
    const [token, setToken] = useLocalStorage("token", null);
    const navigate = useNavigate();

    const login = async (data) => {
        const res = await axiosConfig.post("login", data);
        if (res.status == 200) {
            console.log(res.data.token);
            setUser(res.data.user);
            setToken(`Bearer ${res.data.token}`);
            navigate("/user/events", { replace: true });
        }
    };

    const logout = async () => {
        const res = await axiosConfig.get("logout");
        if (res.status == 200) {
            setUser(null);
            setToken(null);
            navigate("/", { replace: true });
        }
    };

    const value = useMemo(
        () => ({
            user,
            login,
            logout,
        }),
        [user]
    );

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
