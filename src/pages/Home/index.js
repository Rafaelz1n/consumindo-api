import { useEffect, useState } from "react";
import api from '../../services/api';
import './home.css';

import { Link } from "react-router-dom";



function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState (true);

  useEffect(() =>{

    async function loadFilmes(){
      const response = await api.get("movie/now_playing", {
        params: {
        api_key: "ddd7283ae645f23bc2f78eaa3fe5d60d",
        language: "pt-BR",
        page: 1,
      }
       
      }) //URL DA API

      //console.log(response.data.results.slice(0, 10));
      //poster_path é o nome da propriedade onde está localizado a imagem da API

      setFilmes(response.data.results.slice(0, 10));
      setLoading(false);

    }

    loadFilmes();
  
  }, [])

  if(loading){
    return(
      <div className="loading">
        <h2>Carregando Filmes.....</h2>
      </div>
    )
  }


    return (
      <div className="container">
        <div className="lista-filmes">
          {filmes.map((filme) => {
            return(
              <article key={filme.id}>
                <strong>{filme.title}</strong>
                <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/> 
                <Link to={`/filme/${filme.id}`}>Acessar</Link>
              </article>
            )
          
          
        })}
        </div>
      </div>
    );
  }
  
  export default Home;
  