import { useNavigate, Link } from 'react-router-dom'

import { Container, Search, Profile } from "./styles"

import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

export function Header({ children }) {
  const { SignOut, user } = useAuth()

  const navigate = useNavigate()

  function handleSignOut() {
    navigate("/")
    SignOut()
  }

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  return (
    <Container>
      <h1>RocketMovies</h1>

      <Search>
        {children}
      </Search>

      <Profile>
        <div>
          <Link to="/profile">
            <strong>{user.name}</strong>
          </Link>
          <button type="button" onClick={handleSignOut}>sair</button>
        </div>

        <Link to="/profile">
          <img
            src={avatarUrl}
            alt={user.name}
          />
        </Link>

      </Profile>

    </Container>
  )
}