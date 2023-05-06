import { Header } from "../../components/Header/Header";
import { Form } from "../../components/Form/Form";
import { HomeStyled } from "./style";
import { Task } from "../../components/Task/Task";

export const Home = () => {
  return (
    <HomeStyled>
      <Header />
      <main className="content">
        <section className="container">
          <div className="content-form">
            <Form />
          </div>
          <div className="content-task">
            <Task />
          </div>
        </section>
      </main>
    </HomeStyled>
  );
};
