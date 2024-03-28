import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { APIKei } from "../../config/key";
import { Container } from "./styles";


function Details() {

    const {id} = useParams()
    
    const [movie, setMovie] = useState({})
    const image_path = 'https://image.tmdb.org/t/p/w500'

    useEffect(()=> {

      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKei}&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => {
          const {title, overview, poster_path, release_date} = data
          const movie = {
            id,
            title,
            overview,
            image: `${image_path}${poster_path}`,
            releaseDate: release_date
          }
          setMovie(movie)
      })
  }, [id])

  return (
      <Container>
          <div className="movie">
           <img src = {movie.image} alt = {movie.title}/>
            <div className="details">
              <h1>{movie.title}</h1>
              <spam>Sinopse: {movie.overview}</spam>
              <spam>Data de lançamento: {movie.releaseDate}</spam>
              <Link to={`/`}><button>Go Back</button></Link>
            </div>
          </div>
      </Container>
  );
}

export default Details;