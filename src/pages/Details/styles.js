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
  grid-area: content;
  overflow-y: auto;

  padding: 40px 123px;
`

export const Title = styled.div`
  margin: 24px 0;

  display: flex;
  align-items: center;
  gap: 10px;  

  > h1 {
    font-size: 36px;
    font-weight: 500;

    margin-right: 10px;
  }

  > svg {
    width: 20px;
    height: 20px;

    color: ${({ theme }) => theme.COLORS.PINK};
    fill: ${({ theme }) => theme.COLORS.PINK};

    &:nth-child(6) {
      fill: none;
    }
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