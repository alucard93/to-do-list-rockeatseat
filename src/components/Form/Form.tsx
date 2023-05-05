import { PlusCircle } from "phosphor-react";
import { FormStyled } from "./style";


export const Form = () => {
  return (
    <FormStyled>
      <input 
        type="text"
        placeholder="Adicione uma nova tarefa" />
      <button>Criar <PlusCircle size={20} /></button>
    </FormStyled>
  );
};
