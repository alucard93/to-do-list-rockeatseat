import { useEffect } from "react";
import { ITopTaskProps } from "../../../interfaces/TaskInterface";
import { TopTaskStyled } from "./style";

export const Toptask = ({ task }: ITopTaskProps) => {

  const taskCountCreate = task.reduce((acc, _) => acc + 1, 0);
  const filterComplete = task.filter((item) => item.isComplete === true).length;

  useEffect(() => {}, [task]);

  return (
    <TopTaskStyled>
      <div className="create-task">
        <span className="tasks">Tarefas criadas</span>
        <span className="quantity">{taskCountCreate}</span>
      </div>
      <div className="completed-tasks">
        <span className="completed">Concluídas</span>
        <span className="quantity">
        {task.length > 0 ? `${filterComplete} de ${taskCountCreate}` : '0'}
        </span>
      </div>
    </TopTaskStyled>
  );
};
