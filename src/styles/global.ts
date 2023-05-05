import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100%;
  }
  
  button {
		cursor: pointer;
    border: 0;
    background: transparent;
	}
  
  ul, ol, li{
        list-style: none;
        
    }

  img {
        max-width: 100%;
    }
  
  section, aside, div{
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
    }
`;
