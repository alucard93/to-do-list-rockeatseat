import styled from "styled-components";

export const TaskStyled = styled.div`
  flex-direction: column;
  gap: 12px;
  
  max-height: 451px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0;
  }
`;
