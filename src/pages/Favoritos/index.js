import { useEffect, useState } from "react";
import "./favoritos.css"
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


function Favoritos(){
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {

        const minhaLista = localStorage.getItem("@primeFlix");
        setFilmes(JSON.parse(minhaLista) || [])

    }, [])

    function excluirFilmes(id){
        let filtrofilmes = filmes.filter((item) => {
            return(item.id !== id)
        })

        setFilmes(filtrofilmes);
        localStorage.setItem("@primeFlix", JSON.stringify(filtrofilmes));
        toast.success("Filme Removido com Sucesso!")
    }


    return(
        <div className="meus-filmes">
            <h1>Meus filmes</h1>

            <ul>
                {filmes.map((item) => {
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>
                            
                            
                            <div>
                            <Link to={`/filme/${item.id}`}>Ver Detalhes</Link>
                            <button onClick={() => excluirFilmes(item.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
           </ul>
        </div>
    )
}

export default Favoritos;