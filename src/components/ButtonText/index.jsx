import { Container } from "./styles";

export function ButtonText({ icon: Icon, title, ...rest}){
  return(
    <Container 
      type="button"
      {...rest}
    >
      <Icon size="16"/>
      {title}
    </Container>
  )
}