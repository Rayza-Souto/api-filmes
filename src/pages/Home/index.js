import {Container, MovieList, Movie} from "./styles";
import {APIKei} from "../../config/key";
import { useState, useEffect } from "react";

function Home(){

    const [Movies, setMovies] = useState([]);
    const image_path = "https://image.tmdb.org/t/p/w500"

    useEffect(()=> {

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKei}&language=en-US&page=1`)
        .then(response => response.json()) //vai retornar um objeto json
        .then(data => {
            setMovies(data.results)
        })
    }, [])

    return(
        <Container>
            <h1>Movies</h1>
            <br></br>
            <MovieList> 
                {Movies.map(movie=> { //**map é uma função que percorre um array e retorna um novo array com os elementos modificados.**//
                    return( 
                        <Movie key = {movie.id}>
                            <a href="https://www.google.com">
                            <img src = {`${image_path}${movie.poster_path}`} alt= {movie.title}/> </a>
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}
            </MovieList>
        </Container>
        
    )
}

export default Home;