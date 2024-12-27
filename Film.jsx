import React,{useState,useEffect} from "react";
import {Form,Row,Col,Card,Button, CardBody} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const Film=() =>{
    const[movies,setMovies]=useState([]);
    const[search,SetSearch]=useState("");
    const navigate = useNavigate();

const fetchmovie = async() => {
    try{
        const response = await fetch('https://www.omdbapi.com/?s={searchTerm}&apikey=your_api_key');
        const data=await response.json();
        setMovies(data.Search || []);

    
    }catch(error){
        console.error('error data:',error);

    }
    };

    useEffect(() => {
        if(search){
            fetchmovie();

        }else{
            setMovies([]);
        }
    },[search]);


    return(
        <div>
            <Form className="mb-4">
                <h1>Search Movies</h1>
                <Form.Group controlId="search">
                    <Form.Control className="search-input"
                    type="text"
                    placeholder="search"
                    value={search}
                    onChange={(e) =>
                        SetSearch(e.target.value)
                    }/>

              </Form.Group>
            </Form>
            <Row>
                {movies.length>0?(
                    movie.map((movie)=>(
                        <Col key={imdbID} md={4} className="mb-4">
                            <Card onClick={() => navigate('/movie/${movie.ImdbID')} style={{ cursor: 'pointer'}}>
                                <Card.img variant="top"
                                src={movie.Poster}/>
                                <Card.Body>
                                    <Card.Title>{movie.Title}</Card.Title>
                                <Card.Text>{Movie.Year || "No description is available"} - {movie.Type}</Card.Text>
                                </Card.Body>

                            </Card>
                        </Col>
                    ))

                ):(
                    <p>No movies found try searching</p>
                )}
            </Row>
        </div>
    );

};
export default Film;

