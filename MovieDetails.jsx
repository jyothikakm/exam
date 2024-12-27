import React,{ useState,useEffect} from "react";
import { useParams } from 'react-router-dom';
import { Card, card, Spinner } from 'react-bootstrap';

const MovieDetails = () => {
    const id = useparams();
    const [movie, setMovie] = useState(null);
    const fetchMovieDetails = async() => {
        try{
            const response=await fetch('https://www.omdbapi.com/?i={movieId}&apikey=your_api_key');
            const data = await response.json();
            setMovie(data);


        }catch(error) {
            console.error('error fetching',error);
        }
    };

    useEffect(()=> {
        fetchMovieDetails();

    },[id]);
    return(
        <div>
            {movie ?(
                <Card className="mt-4">
                    <card.img variant="top"
                    src={movie.Poster}
                    alt={movie.Title}/>

                    <Card.Body>
                        <Card.Title>{movie.Title}</Card.Title>
                        <Card.Text><strong>Year</strong>{movie.year}</Card.Text>
                       
                        <Card.Text><strong>Genre</strong>{movie.Gener}</Card.Text>
                     
                        <Card.Text><strong>Director</strong>{movie.Director}</Card.Text>
                      
                        <Card.Text><strong>Plot</strong>{movie.Plot}</Card.Text>

                    </Card.Body>
                </Card>
            ) : (
                <p>loading</p>
            )}
        </div>
    );
};
export default MovieDetails;