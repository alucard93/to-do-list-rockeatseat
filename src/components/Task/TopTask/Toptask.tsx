import { TopTaskStyled } from "./style";

export const Toptask = () => {
  return (
    <TopTaskStyled>
      <div className="create-task">
        <span className="tasks">Tarefas criadas</span>
        <span className="quantity">5</span>
      </div>
      <div className="completed-tasks">
        <span className="completed">Concluídas</span>
        <span className="quantity">2 de 5</span>
      </div>
    </TopTaskStyled>
  );
};
