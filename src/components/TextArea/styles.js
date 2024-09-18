import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 274px;

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
  
  padding: 20px 16px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800 };
  color: ${({ theme }) => theme.COLORS.WHITE };

  border: none;
  resize: none;


  &::placeholder {
     color: ${({ theme }) => theme.COLORS.GRAY_300 };
  }
`