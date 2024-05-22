//ROTAS - Interações do navegador e paginação

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Filme from "./pages/Filmes";
import Favoritos from "./pages/Favoritos";

import Erro from "./pages/Erro";

import Header from "./components/Header";

function RoutesAPP(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/filme/:id" element={ <Filme/> }/>
                <Route path="/Favoritos" element={ <Favoritos/>}/>

                <Route path="*" element={ <Erro/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesAPP;