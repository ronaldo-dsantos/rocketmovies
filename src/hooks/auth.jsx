import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api"
import { json } from "react-router-dom";

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function SignIn({ email, password }) {

    try {
      const response = await api.post("/sessions", { email, password })
      const { user, token } = response.data

      localStorage.setItem("@rocketmovies:user", JSON.stringify(user))
      localStorage.setItem("@rocketmovies:token", token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({ user, token })
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível entrar.")
      }
    }
  }

  function SignOut() {
    localStorage.removeItem("@rocketmovies:token")
    localStorage.removeItem("@rocketmovies:user")

    setData({})
  }

  async function updateProfile({ user }) {
    try {
      await api.put("/users", user)
      localStorage.setItem("@rocketmovies:user", JSON.stringify(user))

      setData({ user, token: data.token })
      alert("Perfil atualizado com sucesso!")

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível atualizar o perfil.")
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@rocketmovies:token")
    const user = localStorage.getItem("@rocketmovies:user")

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user)
      })
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      SignIn,
      SignOut,
      updateProfile,
      user: data.user
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
