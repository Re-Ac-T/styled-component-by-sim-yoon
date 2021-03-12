import React, {useState} from 'react';
import styled from 'styled-components';

const MovieBlock = styled.article`
    display: inline-block;
    color: #fff;
    background-size: 200px;
    width: 200px;
    height: 300px;
    margin: 0 10px 10px 0;
    border-radius: 10px;
	box-shadow: 0 0 16px #000; 
    cursor: pointer;
    
    transform-style: preserve-3d;
    transition: transform 0.02s linear;

    ${({move, thumb}) =>  
        `transform: rotateY(${move.ry}deg) rotateX(${move.rx}deg) translateZ(50px);
        background-image: url('https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${thumb}')`
    }
`;

const Movie = ({movie, setState}) => {
    const [move, setMove] = useState({ry: 0, rx: 0});

    const onmousemove = function(e) {
        const aElem = e.target;
        const boundingClientRect = aElem.getBoundingClientRect();
        const x = e.clientX - boundingClientRect.left;
        const y = e.clientY - boundingClientRect.top;
        const xc = boundingClientRect.width/2;
        const yc = boundingClientRect.height/2;
        const dx = x - xc;
        const dy = y - yc;
        setMove({ry: dx/10, rx: dy/-10});
    }

    const onmouseleave = function() {
        setMove({ry: 0, rx: 0});
    }

    const movieCardClick = () => {
        setState({
            state: true,
            movie: movie
        });
    }

    return(
        <MovieBlock
            onMouseMove={onmousemove} 
            onMouseLeave={onmouseleave} 
            onClick={movieCardClick}
            thumb={movie.poster_path}
            move={move}
        />
    );
}

export default Movie;