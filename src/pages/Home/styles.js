import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px 142px auto;
  grid-template-areas: 
  "header"
  "section" 
  "movie";
`

export const Content = styled.div`
  padding: 0 123px;
  
  section {
    grid-area: "section";

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 48px 0 38px;

    h1 {
      font-size: 32px;
      font-weight: 400;
    }

    button {
      width: 208px;
      margin: 0;
    }
  }

  > .movie {
    grid-area: "movie";
    overflow-y: scroll;
    height: 558px;

    &::-webkit-scrollbar {
      width: 8px;      
    }

    &::-webkit-scrollbar-track {
      background: none;      
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.COLORS.PINK}; 
      border-radius: 8px;
    }    
  }
`

