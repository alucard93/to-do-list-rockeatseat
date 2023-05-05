import { Header } from "../../components/Header/Header";
import { Form } from "../../components/Form/Form";
import { HomeStyled } from "./style";

export const Home = () => {
  return (
    <HomeStyled>
      <Header />
      <main className="content">
        <Form />
      </main>
    </HomeStyled>
  );
};
