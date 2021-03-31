import React from 'react';
import styled from 'styled-components';

const SelectedMoviePoster = styled.div`
    position: absolute;
    width: 398px;
    height: 596px;
    left: 193px;
    top: 214px;

    ${({thumb}) =>  
        `background-image: url('https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${thumb}')`
    }
`;

const SelectedMovieTitle = styled.div`
    position: absolute;
    width: 690px;
    height: 58px;
    left: 647px;
    top: 214px;

    font-family: arial;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;

    color: #FFFFFF;
`;

const SelectedMovieDescription = styled.div`
    position: absolute;
    width: 565px;
    height: 312px;
    left: 647px;
    top: 322px;

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
    left: 1397px;
    top: 15px;

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

    return (
        <>
            <SelectedMoviePoster thumb={movie.poster_path}/>
            
            <div>
                <SelectedMovieTitle>{movie.title}</SelectedMovieTitle>
                <SelectedMovieDescription>{movie.overview}</SelectedMovieDescription>
            </div>
            <ExitButton onClick={Exit} children="X"/>
        </>
    );
}

export default PopUp;