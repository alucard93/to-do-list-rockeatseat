import { HeaderStyled } from "./style";
import logo from "../../assets/Logo.svg";

export const Header = () => {
  return (
    <HeaderStyled>
      <figure>
        <img src={logo} alt="Logo da aplicação ToDo List" />
      </figure>
    </HeaderStyled>
  );
};
