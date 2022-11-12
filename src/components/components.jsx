import React from 'react'

const components = () => {
    const [metodoEscolhido, setMetodoEscolhido] = useState([]);
    const [quantidade, setQuantidade] = useState([]);
    const [imagemMetodo, setImagemMetodo] = useState([]);
    const [metodos, setMetodos] = useState([]);

    function salvarMetodo(event) {
        event.preventDefault();
    
        if(metodoEscolhido === "origami"){
          alert("Este é meu método favorito! :) ");
          return;
        }

        if(quantidade === "" || imagemMetodo === ""){
          alert("Preencha os campos para salvar o método escolhido.");
        }else{
          setMetodos([...metodos, {
            metodo: metodoEscolhido,
            xicaras: quantidade,
            url: imagemMetodo,
          }])
        }
    
        if(quantidade <0 || quantidade < 4){
          alert("Você não me parece tão cafeínado assim!");
          return;
        }
    };

      return (
        <div className="container">
          <h1>Métodos de Preparo de Café Especial</h1>
          <form className="form" onSubmit={salvarMetodo}>
            {/* <input value ={metodoEscolhido} onChange={(event)=> setMetodoEscolhido(event.target.value)}
            placeholder ="Escolha um método"/> */}
            <label>Qual método de preparo você gosta?</label><br></br>
            <select value={metodoEscolhido} onChange={(event)=>setMetodoEscolhido({...metodoEscolhido, metodo:event.target.value})}>
            <option disabled hidden value="">
              Selecione um método
            </option>
                 <option value="hario">Hario V60</option>
                 <option value="aeropress">Aeropress</option>
                 <option value="prensa">Prensa Francesa</option>
                 <option value="origami">Origami</option>

            </select><br></br>
            <input value={quantidade} onChange={(event)=>setQuantidade(event.target.value)} 
            placeholder ="Quantas xícaras por dia?"/> <br></br>
            <input value={imagemMetodo} onChange={(event)=> setImagemMetodo(event.target.value)} placeholder="insira uma imagem do método escolhido"/>


            <input type="submit" onClick={salvarMetodo} value="Salvar"/>
          </form>
          {
            setMetodos.map((metodo)=>{
              return (
                <>
                <h1>{metodo.metodos}</h1>
                <img src={metodos.url}/>
                </>
              )
            })
          }

        </div>
      )
}

export default components