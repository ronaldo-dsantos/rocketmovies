import { useState, useEffect } from "react"
import { FiArrowLeft } from "react-icons/fi"
import { LuClock3 } from "react-icons/lu"
import { useParams, useNavigate } from "react-router-dom"

import { Container, Content, Title, Author, Tags } from "./styles"

import { api } from "../../services/api"
import { formatDateTime } from "../../services/formatDateTime"
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { ButtonText } from "../../components/ButtonText"
import { Tag } from "../../components/Tag"
import { Rating } from "../../components/Rating"
import { Button } from "../../components/Button"

export function Details() {
  const [data, setData] = useState(null)

  const params = useParams()
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente excluir o filme?")

    if (confirm) {
      await api.delete(`/movies/${params.id}`)
      handleBack()
    }
  }

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/movies/${params.id}`)
      setData(response.data)
    }

    fetchMovie()
  }, [])

  return (
    <Container>
      <Header>
        <Input
          placeholder="Pesquisar pelo título"
          onClick={handleBack}
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
            <div>
              <h1>
                {data.title}
              </h1>
            
              <Rating rating={data.rating} />
            </div>

            <Button
              id="remove"
              title="Excluir filme"
              onClick={handleRemove}
            />
          </Title>

          <Author>
            <img
              src={data.avatar ? `${api.defaults.baseURL}/files/${data.avatar}` : avatarPlaceholder}
              alt={data.name}
            />
            <p>{data.name}</p>
            <LuClock3 />
            <p>{formatDateTime(data.created_at)}</p>
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