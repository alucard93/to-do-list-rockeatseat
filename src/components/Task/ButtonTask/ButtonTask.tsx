import { IButtonTaskProps } from "../../../interfaces/TaskInterface";
import { ButtonTaskStyled } from "./styles";
import { Trash } from "phosphor-react";

export const ButtonTask = ({ task, setTask, tasks }: IButtonTaskProps) => {
  

  function handleDeleteTask (uuid: string) {
    const taskWithoutDeletedOne = tasks.filter((item) => item.id != uuid)
    setTask(taskWithoutDeletedOne)
  }

  function handleToggleComplete() {
    const updatedTask = { ...task, isComplete: !task.isComplete };
    setTask(tasks.map((item) => (item.id === task.id ? updatedTask : item)));
  }

  return (
    
    <ButtonTaskStyled>
      <div className="content-button-task">
        <input
          title="marcar como concluído"
          className="checkbox"
          type="checkbox"
          onChange={handleToggleComplete}
          checked={task.isComplete}
        />
        <p>
          {task.title}
        </p>
      </div>
      <div onClick={() => handleDeleteTask(task.id)} title="deletar tarefa" className="content-trash">
        <Trash size={16} />
      </div>
    </ButtonTaskStyled>
  );
};
