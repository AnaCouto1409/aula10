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
  const allProducts = [
    {
        id: 1,
        name: 'Xbox',
        price: '3.000',
        picture: 'https://http2.mlstatic.com/D_NQ_NP_695945-MLB50098260025_052022-O.webp'
    },
    {
        id: 2,
        name: 'Playstation 5',
        price: '5.000',
        picture: 'https://http2.mlstatic.com/D_NQ_NP_841787-MLA44484414455_012021-O.webp'
    },
    {
        id: 3,
        name: 'Switch',
        price: '2.000',
        picture: 'https://http2.mlstatic.com/D_NQ_NP_771705-MLA40692342174_022020-W.webp'
    }
]

const newProduct = {
    id: 4,
    name: 'Playstation 4',
    price: '2.000',
    picture: 'https://http2.mlstatic.com/D_NQ_NP_798586-MLA40076060236_122019-W.webp'
}


  return (
    <div className="App">
     <h1>Adicionar uma nova anotação</h1>
     <fieldset>
     <form onSubmit={event => adicionarAnotacao(event)}>
        <label htmlFor="anotacao"></label>
        <input id="anotacao"></input></form>
        <form>
          <h1>Escreva uma nota Habilidade</h1>
        <label htmlFor="email"></label>
        <input id="email"></input></form>
        </fieldset>
        <button ></button>
        </div>
        
        )}

        export default App;