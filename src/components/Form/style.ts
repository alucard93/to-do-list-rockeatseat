import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  justify-content: space-between;

  width: 100%;
  max-width: 736px;

  margin-top: -26px;
  height: 52px;
  
  gap: 8px;

  & > input {
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 100%;
    max-width: 638px;
    gap: 8px;

    padding: 16px;

    border: 1px solid ${({ theme }) => theme["gray-700"]};
    border-radius: 8px;
    background-color: ${({ theme }) => theme["gray-500"]};

    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    color: ${({ theme }) => theme["gray-300"]};
    
    &:focus {
      border: 1px solid ${({ theme }) => theme.purpleDark };
      color: ${({ theme }) => theme["gray-100"] };
    }
  }

  & > button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;

    width: 100%;
    max-width: 90px;

    padding: 16px;

    background: ${({ theme }) => theme.blueDark};
    border-radius: 8px;

    font-weight: 700;
    font-size: 14px;
    line-height: 140%;
    color: ${({ theme }) => theme["gray-100"] };
    transition: background-color 0.3s;
    
    &:hover {
      background-color: ${({ theme }) => theme.blue };
      transition: background-color 0.3s;
    }
  }
`;
