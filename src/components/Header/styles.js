import styled from "styled-components"

export const Container = styled.header`
  grid-area: header;

  height: 116px;
  width: 100%;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
    
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 64px;
  
  padding: 24px 123px;

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 24px;
  }
`

export const Search = styled.div`
width: 100%;
`

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > a {
    img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    }
  }


  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    margin-right: 8px;

    strong {
      white-space: nowrap;  
      font-size: 14px; 
      color: ${({ theme }) => theme.COLORS.WHITE};  
    }

    button {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      background: none;
      border: none;
    }    
  }
`