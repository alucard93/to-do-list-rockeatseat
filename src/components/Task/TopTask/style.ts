import styled from "styled-components";

export const TopTaskStyled = styled.article`
  width: 100%;
  display: flex;
  justify-content: space-between;

  .create-task {
    gap: 8px;
  }

  .create-task > .tasks {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: ${({ theme }) => theme.blue};
  }

  .quantity {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2px 8px;
    gap: 10px;

    background: ${({ theme }) => theme["gray-400"]};
    border-radius: 999px;

    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: ${({ theme }) => theme["gray-200"]};
  }

  .completed-tasks {
    justify-content: flex-end;
    gap: 8px;
  }

  .completed {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: ${({ theme }) => theme.purple };
  }
`;
