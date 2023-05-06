import { ButtonTaskStyled } from "./styles";
import { Trash } from "phosphor-react";
export const ButtonTask = () => {
  return (
    <ButtonTaskStyled>
      <div className="content-button-task">
        <input title="marcar como concluído" className="checkbox" type="checkbox" />
        <p>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </p>
      </div>
      <div title="deletar tarefa" className="content-trash">
        <Trash size={16} />
      </div>
    </ButtonTaskStyled>
  );
};
