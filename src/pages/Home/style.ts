import styled from "styled-components";

export const HomeStyled = styled.div`
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.backgroundHome};

  main {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;
