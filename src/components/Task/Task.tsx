import { ButtonTask } from "./ButtonTask/ButtonTask";
import { Toptask } from "./TopTask/Toptask";
import { TaskStyled } from "./style";

export const Task = () => {
  return (
    <TaskStyled>
      <Toptask />
      <ButtonTask />
    </TaskStyled>
  );
};
