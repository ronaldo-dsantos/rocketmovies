import { RiAddLargeFill } from "react-icons/ri"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { api } from "../../services/api"

import { Container, Content } from "./styles"

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Movie } from "../../components/Movie"
import { Rating } from "../../components/Rating"

export function Home() {
  const [search, setSearch] = useState("")
  const [movies, setMovies] = useState([])

  const navigate = useNavigate()

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/movies?title=${search}`)
      setMovies(response.data)
    }
    fetchMovies()
  }, [search])

  return (
    <Container>
      <Header>
        <Input
          autoFocus
          placeholder="Pesquisar pelo título"
          onChange={e => setSearch(e.target.value)}
        />
      </Header>

      <Content>
        <section>
          <h1>Meus filmes</h1>
          <Link to="/new">
            <Button title="Adicionar filme" icon={RiAddLargeFill} />
          </Link>
        </section>

        <div className="movie">
          {
            movies.map(movie => (

              <Movie
                key={String(movie.id)}
                data={movie}
                onClick={() => handleDetails(movie.id)}
              >
                <Rating rating={movie.rating} />
                <br />
                <p>
                  {movie.description}
                </p>
              </Movie>
            ))
          }
        </div>
      </Content>
    </Container>
  )
}