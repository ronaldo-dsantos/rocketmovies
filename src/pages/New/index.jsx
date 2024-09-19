import { FiArrowLeft } from "react-icons/fi"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

import { Container, Form } from "./styles"

import { api } from "../../services/api"

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { NoteItem } from "../../components/NoteItem"
import { Button } from "../../components/Button"

export function New() {
  const [title, setTitle] = useState("")
  const [rating, setRating] = useState("")
  const [description, setDescription] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  function handleClear() {
    setTitle("")
    setRating("")
    setDescription("")
    setTags([])
    setNewTag("")
  }

  async function handleNewMovie() {
    const ratingIsNumber = Math.round(rating)

    if (!title || !rating || !description) {
      return alert("Para cadastrar um novo filme, preencha todos os campos.")      
    }    

    if (ratingIsNumber < 1 || ratingIsNumber > 5 || isNaN(ratingIsNumber)) {
      return alert("Informe uma nota de 1 a 5.")
    }

    if (newTag) {
      return alert("Você inseriu um marcador mas não adicionou, clique em adicionar ou deixe o campo vazio.")
    }

    if (tags.length == 0) {
      return alert("Adicione um ou mais marcadores para o seu filme.")
    }

    await api.post("/movies", {
      title,
      description,
      rating,
      tags
    })

    alert("Filme cadastrado com sucesso!")
    navigate(-1)
  }

  return (
    <Container>
      <Header>
        <Input
          placeholder="Pesquisar pelo título"
          onClick={handleBack}
        />
      </Header>

      <main>
        <ButtonText
          icon={FiArrowLeft}
          title="Voltar"
          onClick={handleBack}
        />

        <Form>
          <header>
            <h1>Novo filme</h1>
          </header>

          <div className="input">
            <Input
              placeholder="Título"
              onChange={e => setTitle(e.target.value)}
              value={title}
            />
            <Input
              placeholder="Sua nota (de 0 a 5)"
              onChange={e => setRating(e.target.value)}
              value={rating}
            />
          </div>

          <TextArea
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
            value={description}
          />

          <h2>Marcadores</h2>

          <div className="tags">
            {
              tags.map((tag, index) => (
                <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))
            }

            <NoteItem
              isNew
              placeholder="Novo marcador"
              onChange={e => setNewTag(e.target.value)}
              value={newTag}
              onClick={handleAddTag}
            />
          </div>

          <div className="buttons">
            <Button
              title="Limpar"
              onClick={handleClear}
            />
            <Button
              title="Salvar"
              onClick={handleNewMovie}
            />
          </div>
        </Form>
      </main>

    </Container>
  )
}