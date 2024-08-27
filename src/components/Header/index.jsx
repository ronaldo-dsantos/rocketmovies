import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Container, Search, Profile } from "./styles"

import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { Input } from "../Input"

export function Header({ onSearch }) {
  const [inputValue, setInputValue] = useState('')  

  const { SignOut, user } = useAuth()

  const navigation = useNavigate()

  function handleSignOut() {
    navigation("/")
    SignOut()
  }

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

 useEffect(() => {
   onSearch(inputValue);
  }, [inputValue])

  return (
    <Container>
      <h1>RocketMovies</h1>

      <Search>
        <Input
          placeholder="Pesquisar pelo título"
          onChange={e => setInputValue(e.target.value)}
        />
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