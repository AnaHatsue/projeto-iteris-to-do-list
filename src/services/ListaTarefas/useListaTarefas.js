import {useContext} from "react";
import ListaTarefasContext from "./ListaTarefasContext";

//Hook customizado para uso do Context API ListaTarefasContext, aqui utilizado também como argumento.
const useListaTarefas = () => useContext(ListaTarefasContext);

export default useListaTarefas;