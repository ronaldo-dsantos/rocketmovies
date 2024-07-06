import { Container } from "./styles"

import { Tag } from "../Tag"

export function Movie({ data, children, ...rest}){
  return(
    <Container {...rest}>
      <h1>{data.title}</h1>      
      
      {children}

      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }

    </Container>
  )
}