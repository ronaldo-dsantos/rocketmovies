import { FiArrowLeft } from "react-icons/fi"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { Container, Form } from "./styles"

import { api } from "../../services/api";

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

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewMovie() {
    if (!title || !rating || !description) {
      return alert("Para cadastrar um novo filme, preencha todos os campos.")
    }

    if (newTag) {
      return alert("Você inseriu um marcador mas não adicionou, clique em adicionar ou deixe o campo vazio.")
    }

    await api.post("/notes", {
      title,
      description,
      rating, 
      tags
    })

    alert("Filme cadastrado com sucesso!")
    navigate("/")
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <Link to="/">
              <ButtonText icon={FiArrowLeft} title="Voltar" />
            </Link>
            <h1>Novo filme</h1>
          </header>

          <div className="input">
            <Input
              placeholder="Título"
              onChange={e => setTitle(e.target.value)}
            />
            <Input
              placeholder="Sua nota (de 0 a 5)"
              onChange={e => setRating(e.target.value)}
            />
          </div>

          <TextArea
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
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
            <Button title="Excluir filme" />
            <Button 
              title="Salvar alterações" 
              onClick={handleNewMovie}
              />
          </div>
        </Form>
      </main>


    </Container>
  )
}