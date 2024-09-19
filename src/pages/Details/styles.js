import styled from "styled-components"

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
  padding: 40px 123px;

  grid-area: content;
  overflow-y: auto;

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

  > p {
    text-align: justify;
    white-space: pre-wrap; // Esta propriedade preserva as quebras de linha
    max-height: 340px;

    overflow-y: auto;

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

  > button#remove {
    margin: 40px 0 40px;
    width: 30%;
  }  
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  div {
    margin: 24px 0;

    display: flex;
    align-items: center;
    gap: 10px;  

    h1 {
      font-size: 36px;
      font-weight: 500;

      margin-right: 10px;
    }

    > div {
      svg {
        width: 20px;
        height: 20px;
      }  
    }
  }

  button {
    width: 208px;
    margin: 0;
  }
`

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  > img {
    width: 16px;
    height: 16px;
    border-radius: 50%;
  }

  > svg {
    width: 16px;
    height: 16px;

    color: ${({ theme }) => theme.COLORS.PINK};
  }
`

export const Tags = styled.div`
  padding: 40px 0;
  
  display: flex;
  align-items: center;
  gap: 8px;
`