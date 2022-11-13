import App from "./App";


const CardCafe = (props) => {

  return (
      <div className="card-container">
        <h1>{props.metodoEscolhido}</h1>
        <h2>{props.quantidade}</h2>
        <img src = {props.imagemMetodo} width = {300} height={500}/>
      </div>
  )
  };


  export default CardCafe;