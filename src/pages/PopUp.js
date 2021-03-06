import React from 'react';
import styled from 'styled-components';
import SelectedMoviePoster from '../components/SelectedMoviePoster';
import './PopUp.css';

const MovieDetailBlock = styled.div`
    margin: 3% auto 3% auto;
    width: 80%;
`;

const SelectedMovieTitle = styled.div`
    display: inline-block;

    font-family: arial;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;

    color: #FFFFFF;
`;

const SelectedMovieDescription = styled.div`
    display: inline-block;

    font-family: arial;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;

    color: #FFFFFF;
`;

const ExitButton = styled.div`
    position: absolute;
    width: 23px;
    height: 42px;
    left: 90%;
    bottom: 90%;
    

    font-family: arial;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;
    /* identical to box height, or 117% */

    color: #FFFFFF;
`
const PopUp = ( {movie, setState} ) => {

    const Exit = () => {
        setState({
            state: false,
            movie: {}
        });
    }
    console.log(movie.vote_average);
    return (
        <MovieDetailBlock>
            <div className="grid">
                <div>
                    <SelectedMoviePoster movie={movie} thumb={movie.poster_path} num={movie.vote_average}/>    
                </div>
                <div>
                    <SelectedMovieTitle>{movie.title}</SelectedMovieTitle>
                    <SelectedMovieDescription>{movie.overview}</SelectedMovieDescription>
                </div>
            </div>
            <ExitButton onClick={Exit} children="X"/>
        </MovieDetailBlock>
    );
}

export default PopUp;