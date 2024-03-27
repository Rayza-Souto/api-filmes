import {Container, MovieList, Movie} from "./styles";

function Home(){

    const Movies = [
        {
            id: 1,
            title: 'Spider-Man',
            image_url: 'https://a-static.mlcdn.com.br/450x450/poster-cartaz-homem-aranha-sem-volta-para-casa-a-pop-arte-poster/poparteskins2/15938541928/eab0331747ef83ad0e878c1ea4535160.jpeg'
        },

        {
            id: 2,
            title: 'Avengers',
            image_url: 'https://a-static.mlcdn.com.br/450x450/poster-cartaz-homem-aranha-sem-volta-para-casa-a-pop-arte-poster/poparteskins2/15938541928/eab0331747ef83ad0e878c1ea4535160.jpeg'
        },

        {
            id: 3,
            title: 'Batman',
            image_url: 'https://a-static.mlcdn.com.br/450x450/poster-cartaz-homem-aranha-sem-volta-para-casa-a-pop-arte-poster/poparteskins2/15938541928/eab0331747ef83ad0e878c1ea4535160.jpeg'
        }

    ];

    return(
        <Container>
            <h1>Movies</h1>
            <br></br>
            <MovieList> 
                {Movies.map(movie=> { //**map é uma função que percorre um array e retorna um novo array com os elementos modificados.**//
                    return( 
                        <Movie key = {movie.id}>
                            <a href="https://www.google.com">
                            <img src = {movie.image_url} alt= {movie.title}/> </a>
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}
            </MovieList>
        </Container>
        
    )
}

export default Home;