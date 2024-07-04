import { Container, Search, Profile } from "./styles"

import { Input } from "../Input"

export function Header(){
  return(
    <Container>
      <h1>RocketMovies</h1>

      <Search>
        <Input placeholder="Pesquisar pelo título"/>
      </Search>

      <Profile>
        <div>
          <strong>Ronaldo Domingues</strong>
          <span>sair</span>
        </div>

        <img src="https://github.com/ronaldo-dsantos.png" alt="Imagem do usuário" />
      </Profile>

    </Container>
  )
}