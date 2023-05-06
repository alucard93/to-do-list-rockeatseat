import { PlusCircle } from "phosphor-react";
import { FormStyled } from "./style";
import { ITask } from "../../interfaces/TaskInterface";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { v4 as uuidv4 } from "uuid";
import { validationTextTask } from "../../validators/validationTextTask";

export interface TaskData {
  title: string;
}

interface FormProps {
  setTask: React.Dispatch<React.SetStateAction<ITask[]>>;
  task: ITask[];
}

export const Form = ({ task, setTask }: FormProps) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskData>({
    resolver: yupResolver(validationTextTask),
  });

  function handleCreateTask(data: any) {
    const newTask: ITask = {
      id: uuidv4(),
      title: data.title,
      isComplete: false,
    };

    setTask([...task, newTask]);
    reset()
  }

  return (
    <FormStyled onSubmit={handleSubmit(handleCreateTask)}>
      <input
        type="text"
        placeholder={errors.title? errors.title?.message : "Adicione uma nova tarefa" }
        {...register("title")}
        maxLength={80}
      />
      <button type="submit">
        Criar <PlusCircle size={20} />
      </button>
    </FormStyled>
  );
};
