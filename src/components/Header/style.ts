import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 200px;
  background-color: ${({theme}) => theme["gray-700"]};
`