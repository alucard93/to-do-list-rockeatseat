import clipboard from '../../../assets/Clipboard.svg'
import { EmptyTaskStyled } from "./styles";

export const EmptyTask = () => {
  return (
    <EmptyTaskStyled>
      <div className="content-empty">
        <img src={clipboard} alt="" />
        <h2>
          Você ainda não tem tarefas cadastradas Crie tarefas e organize seus
          itens a fazer
        </h2>
      </div>
    </EmptyTaskStyled>
  );
};
