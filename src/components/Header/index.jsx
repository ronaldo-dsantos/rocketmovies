import { Container, Search, Profile } from "./styles"

import { useAuth } from "../../hooks/auth"

import { Input } from "../Input"

export function Header() {
  const { SignOut } = useAuth()


  return (
    <Container>
      <h1>RocketMovies</h1>

      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>

      <Profile>
        <div>
          <strong>Ronaldo Domingues</strong>
          <button type="button" onClick={SignOut}>sair</button>          
        </div>

        <img src="https://github.com/ronaldo-dsantos.png" alt="Imagem do usuário" />
      </Profile>

    </Container>
  )
}