import styled from "styled-components";

export const EmptyTaskStyled = styled.article`

width: 100%;
  .content-empty {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 64px 24px;
    gap: 16px;
    border-top: 1px solid ${({ theme }) => theme["gray-400"]};
    border-radius: 8px;
    
  }

  .content-empty > h2 {
    max-width: 340px;
    text-align: center;
    font-weight: 700;
    font-size: 16px;
    height: 44px;
    color: ${({ theme }) => theme["gray-300"]};
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    
  }
`;
