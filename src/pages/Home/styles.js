import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 
  "header" 
  "content";
`

export const Content = styled.div`  
  grid-area: content;
  overflow-y: auto;

  padding: 0 123px;

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
  
  > header {
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
`

