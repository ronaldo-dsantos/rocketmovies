import { Container, Form } from "./styles"
import { FiArrowLeft } from "react-icons/fi"
import { Link } from "react-router-dom";

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { NoteItem } from "../../components/NoteItem"
import { Button } from "../../components/Button"

export function New(){
  return(
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <Link to="/">
              <ButtonText icon={FiArrowLeft} title="Voltar"/>
            </Link>            
            <h1>Novo filme</h1>
          </header>
          
          <div className="input">
            <Input placeholder="Título"/>
            <Input placeholder="Sua nota (de 0 a 5)"/>
          </div>

          <TextArea placeholder="Observações" />

          <h2>Marcadores</h2>

          <div className="tags">
            <NoteItem value="React" />
            <NoteItem placeholder="Novo marcador" isNew/>
          </div>

          <div className="buttons">
            <Button title="Excluir filme"/>
            <Button title="Salvar alterações"/>              
          </div>        
        </Form>        
      </main>

      
    </Container>
  )
}