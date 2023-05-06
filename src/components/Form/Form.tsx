import { useState } from "react";
import { PlusCircle } from "phosphor-react";
import { FormStyled } from "./style";
import { ITask } from "../../interfaces/TaskInterface";

import { v4 as uuidv4 } from "uuid";

interface FormProps {
  setTask: React.Dispatch<React.SetStateAction<ITask[]>>;
  task: ITask[];
}

export const Form = ({ task, setTask }: FormProps) => {
  const [newTaskText, setNewTaskText] = useState("");

  function handleCreateTask(event: { preventDefault: () => void; }) {
    event.preventDefault();
    const newTask: ITask = {
      id: uuidv4(),
      title: newTaskText,
      isComplete: false,
    };

    setTask([...task, newTask]);
    setNewTaskText("");
  }

  return (
    <FormStyled>
      <input
        type="text"
        name="task"
        value={newTaskText}
        placeholder="Adicione uma nova tarefa"
        onChange={(e) => setNewTaskText(e.target.value)}
      />
      <button onClick={handleCreateTask}>
        Criar <PlusCircle size={20} />
      </button>
    </FormStyled>
  );
};
