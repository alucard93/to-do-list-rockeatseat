import { ITasksProps } from "../../interfaces/TaskInterface";
import { ButtonTask } from "./ButtonTask/ButtonTask";
import { EmptyTask } from "./EmptyTask/EmptyTask";
import { Toptask } from "./TopTask/Toptask";
import { TaskStyled } from "./style";

export const Task = ({ tasks, setTask }: ITasksProps) => {
  const taskItems = tasks.map((item) => (
    <ButtonTask key={item.id} task={item} tasks={tasks} setTask={setTask} />
  ));

  return (
    <TaskStyled>
      <Toptask task={tasks} />
      {tasks.length === 0 ? <EmptyTask /> : taskItems}
    </TaskStyled>
  );
};
