import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [data, setData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  function signOut() {
    localStorage.removeItem("@food:token");
    localStorage.removeItem("@food:user");

    setData({});
  }

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      console.log(user);

      localStorage.setItem("@food:user", JSON.stringify(user));
      localStorage.setItem("@food:token", token);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({ user, token });
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else {
        alert("Não foi possível entrar");
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@food:token");
    const user = localStorage.getItem("@food:user");

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({ token, user: JSON.parse(user) });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, user: data.user, errorMessage }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
