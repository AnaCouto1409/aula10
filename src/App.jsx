import {Card} from './Card.jsx';
import { useState } from "react"

// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente
function validationTexto(texto){
  texto = texto.trim();
  if(texto.legnth < 3){
    return false;
  }
  return true;
}



function App() {
  // Aqui você irá criar os Estados para manipular os Inputs
  const [textoAnotacao, setTextoAnotacao,] = useState("");
  const [corAnotacao, setCorAnotacao] = useState("");
  const [listaAnotacao, setListaAnotacao] = useState([]);

  function adicionarAnotacao(event){
    event.preventDefault();
    const novaAnotacao = {
      cor: corAnotacao,
      texto: textoAnotacao
    }

    setListaAnotacao([...listaAnotacao, novaAnotacao]);
    setCorAnotacao('');
    setTextoAnotacao('');
  }


  return (
    <div className="App">
     <h1>Adionar uma nova anotação</h1>
     <form onSubmit={event => adicionarAnotacao(event)}>
        <label htmlFor="anotacao"></label>
        <input id="anotacao"></input></form>
        </div>
        )}

        export default App;