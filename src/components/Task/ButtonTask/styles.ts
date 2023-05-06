import styled from "styled-components";

export const ButtonTaskStyled = styled.article`
  display: flex;
  align-items: flex-start;
  padding: 16px;
  gap: 12px;

  background: ${({ theme }) => theme["gray-500"]};

  border: 1px solid ${({ theme }) => theme["gray-500"]};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  border-radius: 8px;

  .content-button-task {
    gap: 12px;
  }

  .content-button-task > input {
    appearance: none;
    width: 17.45px;
    height: 17.45px;
    border: 2px solid ${({ theme }) => theme.blue};
    border-radius: 50%;
    outline: none;
    cursor: pointer;
    background-color: ${({ theme }) => theme["gray-500"]};
    transition: 0.5s;

    &:checked {
      transition: 0.5s;
      background-color: #007bff;
      border-color: #007bff;
    }
  }

  .content-button-task > input:checked ~ p {
    transition: 0.5s;
    text-decoration-line: line-through;
    color: ${({ theme }) => theme["gray-300"]};
  }

  .content-button-task > input:checked::before {
    content: "L";
    font-family: Arial, sans-serif;
    color: ${({ theme }) => theme["gray-100"]};
    font-size: 12px;
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    transform: rotate(-315deg) scaleX(-1);
  }

  .content-button-task > p {
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;

    color: ${({ theme }) => theme["gray-100"]};
  }

  .content-trash {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    background: transparent;
    border-radius: 4px;
  
  }

  .content-trash > svg {
    color: ${({ theme }) => theme["gray-300"]};
    border-radius: 4px;
    background-color: transparent ;
    box-sizing: content-box;
    padding: 4px;

    &:hover {
      color: ${({ theme }) => theme.danger };
      background-color: ${({ theme }) => theme["gray-400"] } ;
      padding: 4px;
      box-sizing: content-box;
    }
  }
`;
