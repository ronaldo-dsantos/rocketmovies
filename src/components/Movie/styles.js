import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500 };

  border: none;
  border-radius: 16px;
  padding: 32px;
  margin-bottom: 24px;

  > h1 {
    flex: 1;
    text-align: left;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.COLORS.WHITE }
  }

  > svg {
    width: 12px;
    height: 12px;

    float: left;
    margin-right: 6px;

  
    color: ${({ theme }) => theme.COLORS.PINK};
    fill: ${({ theme }) => theme.COLORS.PINK};

    &:nth-child(6) {
      fill: none;
    }
  }

  > p {
    margin-top: 15px;

    color: ${({ theme }) => theme.COLORS.GRAY_100 };

    display: -webkit-box;
    -webkit-line-clamp: 2; /* Limita a duas linhas */
    -webkit-box-orient: vertical; 
    overflow: hidden;
    text-overflow: ellipsis; 
    text-align: left;
  }

  > footer {
    width: 100%;
    display: flex;
    gap: 8px;
    margin-top: 32px;   
    
    span {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400 };
    }
  }

`