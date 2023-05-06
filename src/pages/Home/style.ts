import styled from "styled-components";

export const HomeStyled = styled.div`
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.backgroundHome};

  main {
    padding: 0 1rem 1rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 451px;
  }

  .container {
    flex-direction: column;
    max-width: 736px;
    gap: 64px;
  }

  .content-form {
    justify-content: center;
  }

  .content-task {
    display: flex;
    justify-content: center;
  }
`;
