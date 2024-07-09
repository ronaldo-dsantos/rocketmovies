import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, $isnew }) => $isnew ? "transparent" : theme.COLORS.BACKGROUND_800};  

  border: ${({ theme, $isnew }) => $isnew ? `2px dashed ${theme.COLORS.GRAY_300}` : "none"};

  margin: 16px;
  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > input {
    height: 56px;
    width: 100%;

    padding: 16px;
    color: ${({ theme }) => theme.COLORS.WHITE};    
    background-color: transparent;
    border: none;

    &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }


`