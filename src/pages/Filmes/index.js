import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";

import "./filme.css";

import api from "../../services/api";


function Filme() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function loadFilmes(){
      await api.get(`/movie/${id}`, {
        params:{
        api_key: "ddd7283ae645f23bc2f78eaa3fe5d60d",
        language: "pt-BR",
        }
      })
      .then((response) => {
        setFilme(response.data);
        setLoading(false);
      })
      .catch (() => {
        console.log("Filme nao encontrado");
        navigate("/", {replace: true});
      })
    }

    loadFilmes();


    return () => {

      console.log("COMPONENTE FOI DESMONTADO")
    }

  }, [id])

  function salvarFilme(){
    const minhaLista = localStorage.getItem("@primeFlix");

    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilmes = filmesSalvos.some( (filmesSalvos) => filmesSalvos.id === filme.id )

    if(hasFilmes){
      toast.warn("Esse Filme ja Está na Lista")
      return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem("@primeFlix", JSON.stringify(filmesSalvos));
    toast.success("Filme Salvo Com Sucesso!")

  }

  if(loading){
    return(
      <div className="filme-info">
        <h1>Carregando detalhes....</h1>
      </div>
    )
  }

    return (
      <div className="filme-info">
       <h1>{filme.title}</h1>
       <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/> 
        
        <h3>Sinopse</h3>
        <span>{filme.overview}</span>

        <strong>Avaliação: {filme.vote_average} / 10</strong>
      
      <div className="area-button">
        <button onClick={salvarFilme}>Salvar</button>
        <button>
          <a target="blank" rel="external" href= {`https://youtube.com/results?search_query=${filme.title} Trailer`}>
            Trailer
          </a>
          </button>
      ' </div>
      </div>
    )
  }
  
  export default Filme;