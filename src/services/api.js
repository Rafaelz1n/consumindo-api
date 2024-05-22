import axios from "axios";

//URL = https://api.themoviedb.org/3/
//baseURL = /movie/now_playing?api_key=ddd7283ae645f23bc2f78eaa3fe5d60d&language=pt-BR

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/" //BaseURL DA API
});

export default api