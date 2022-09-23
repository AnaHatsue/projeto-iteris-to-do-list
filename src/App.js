import './App.css';
import React, {useState} from 'react';
import ListaTarefasContext from "./services/ListaTarefas/ListaTarefasContext";
import { listaTarefasContextBuilder } from './services/ListaTarefas/ListaTarefasServices';
import ListaTarefasPage from './components/ListaTarefasPage/ListaTarefasPage';

function App() {
  //Inicializa o Objeto Context a ser compartilhado, passando por um useState em que a lista vazia vai ser a listaDeTarefas e set, permitindo que adicone uma novaTarefa.
  //Retornará o Provider, que é o próprio controleDeTarefas, para que todos os elementos tenham acesso ao Contexto.
  const controleDeTarefas = listaTarefasContextBuilder(useState([]));
  return (
    <div className="App">
      <div className="App">
        <ListaTarefasContext.Provider value={controleDeTarefas}>
        <ListaTarefasPage></ListaTarefasPage>
        </ListaTarefasContext.Provider>
      </div>
    </div>
  );
}

export default App;
