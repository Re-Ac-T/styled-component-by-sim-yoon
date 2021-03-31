import React from 'react';
import styled from 'styled-components';
import movieData from '../hooks/movieData';
import Movie from '../components/Movie';

const MovieListBlock = styled.section`
    padding: 20px;
    box-sizing: border-box;
    width: 100%;
    text-align: center;
    h1{
        color: #fff;
        margin: 0 0 3rem;
    }
`;

const MovieList = ({division, setState}) => {
    
    const movieList = movieData(division.nav_id); 

    return(
        <MovieListBlock>
            <h1>{division.title}</h1>
            {(movieList !== null) &&
            movieList.map((movie) => {
                return(
                    <Movie 
                        movie={movie} 
                        key={movie.id} 
                        setState={setState} 
                    />
                );
            })}
        </MovieListBlock>
    );
}

export default MovieList;