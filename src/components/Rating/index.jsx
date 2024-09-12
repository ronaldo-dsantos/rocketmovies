import { IoMdStar, IoIosStarOutline } from "react-icons/io"

import { Container } from "./styles"

export function Rating({ rating }) {
  const totalStars = 5

  return (
    <Container>
      {Array.from({ length: totalStars }).map((_, index) => {        
        return index < rating ? <IoMdStar key={index} /> : <IoIosStarOutline key={index} />;
      })}
    </Container>
  )
}