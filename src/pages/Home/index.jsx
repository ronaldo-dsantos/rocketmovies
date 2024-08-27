import { RiAddLargeFill } from "react-icons/ri";
import { FiStar } from "react-icons/fi"
import { Link } from "react-router-dom";
import { useState } from 'react';

import { api } from "../../services/api";

import { Container, Content } from "./styles";

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Movie } from "../../components/Movie"


export function Home() {
  const [search, setSearch] = useState("")
  const [movies, setMovies] = useState([])

  async function fetchMovies(inputValue) {
    setSearch(inputValue)

    const response = await api.get(`/notes?title=${search}`)
    setMovies(response.data)
  }

  return (
    <Container>
      <Header onSearch={fetchMovies} />

      <Content>
        <header>
          <h1>Meus filmes</h1>
          <Link to="/new">
            <Button title="Adicionar filme" icon={RiAddLargeFill} />
          </Link>
        </header>

        {
          movies.map(movie => (

            <Movie
              key={String(movie.id)}
              data={movie}
            >
              <FiStar /> <FiStar /> <FiStar /> <FiStar /> <FiStar />
              <br />
              <p>
                {movie.description}
              </p>
            </Movie>
          ))
        }

      </Content>
    </Container>
  )
}