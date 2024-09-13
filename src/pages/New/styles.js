import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: hidden;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    padding: 40px 123px;
    grid-area: content;
  }
`

export const Form = styled.form`
  width: 100%;
  height: 640px;
  
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

  > header {
    h1 {
      font-size: 36px;
      font-weight: 500;

      margin-top: 24px;
    }
  }

  > .input {
    display: flex;
    align-items: center;
    gap: 40px;

    margin: 40px 0;
  }

  > h2 {
    margin-top: 40px;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 20px;
    font-weight: 400;
  }

  .tags {
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    padding: 16px;
    margin-top: 24px;
    border-radius: 10px;

    display: flex;
    flex-wrap: wrap; 
  }

  .buttons {
    display: flex;
    align-items: center;
    gap: 40px;

    > button {
      margin: 40px 0 24px;      

      &:nth-child(1) {
        background-color: ${({ theme }) => theme.COLORS.BLACK};
        color: ${({ theme }) => theme.COLORS.PINK};
      }
    }
  }
`
