import { useState, useEffect } from "react"
import { FiArrowLeft } from "react-icons/fi"
import { LuClock3 } from "react-icons/lu"
import { useParams, useNavigate } from "react-router-dom"

import { Container, Content, Title, Author, Tags } from "./styles"

import { api } from "../../services/api"

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { ButtonText } from "../../components/ButtonText"
import { Tag } from "../../components/Tag"
import { Rating } from "../../components/Rating"

export function Details() {
  const [data, setData] = useState(null)

  const params = useParams()
  const navigate = useNavigate()

  function handleBack() {
    navigate("/")
  }

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)      
    }

    fetchMovie()
  }, [])

  return (
    <Container>
      <Header>
        <Input
          placeholder="Pesquisar pelo título"
        />
      </Header>

      {
        data &&
        <Content>
          <ButtonText
            icon={FiArrowLeft}
            title="Voltar"
            onClick={handleBack}
          />

          <Title>
            <h1>
              {data.title}
            </h1>
            <Rating rating={data.rating}/>           
          </Title>

          <Author>
            <img src="https://github.com/ronaldo-dsantos.png" alt="Imagem do usuário" />
            <p>Por Ronaldo Domingues</p>
            <LuClock3 />
            <p>23/05/22 às 08:00</p>
          </Author>

          {
            data.tags &&
            <Tags>
              {
                data.tags.map(tag => (
                  <Tag
                    key={String(tag.id)}
                    title={tag.name}
                  />
                ))
              }
            </Tags>
          }

          <p>
            {data.description}
          </p>
        </Content>
      }

    </Container>

  )
}