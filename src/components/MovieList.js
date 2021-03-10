import React, {useState} from 'react';
import styled from 'styled-components';
import movieList from '../data/movieData';
import useWindowSize from '../hooks/useWindowSize';

const MovieSwitch = styled.section`
    text-align: center;
    padding: 50px 0 30px;
    display: flex;
    justify-content: center;
    div{
	    overflow: hidden;
        color: #fff;
        border-radius: 5px;
        cursor: pointer;
        & + & {
            margin-left: 10px;
        }

        span {
            position: relative;
            display: inline-block;
            text-align: center;
            padding: 0px 10px;
            -webkit-transition: -webkit-transform 0.3s;
            -moz-transition: -moz-transform 0.3s;
            transition: transform 0.3s;
        }

        span::before {
            position: absolute;
            top: 100%;
            content: attr(data-hover);
            font-weight: 700;
            -webkit-transform: translate3d(0,0,0);
            -moz-transform: translate3d(0,0,0);
            transform: translate3d(0,0,0);
        }

        &:hover span,
        &:focus span {
            -webkit-transform: translateY(-100%);
            -moz-transform: translateY(-100%);
            transform: translateY(-100%);
        }

        span:active{
            color: #c4302b 
        }
    }
`;

const MovieListBlock = styled.section`
    padding: 20px;
    box-sizing: border-box;
    width: 100%;
    text-align: center;
`;

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
        // `transform: rotateY(${move.e}deg) rotateX(${move.n}deg);
        `background-image: url('${thumb}')`
    }
`;

const Movie = ({movie, setState}) => {
    const [move, setMove] = useState({ e: 0, n: 0 });
    const size = useWindowSize();

    const onmousemove = function(t) {
        // console.log(t)
        // console.log(size.width+','+size.height)
        // console.log(t.pageX+','+t.pageY)
        let e = -(size.width / 2 - t.pageX) / 30;
        let n = (size.height / 2 - t.pageY) / 10;
        setMove({ e: e, n: n });
    }

    const onmouseleave = function() {
        setMove({ e: 0, n: 0 });
    }

    const onClick = () => {
        setState({
            state: true,
            movie: movie
        });
    }

    return(
        <MovieBlock
            onMouseMove={onmousemove} 
            onMouseLeave={onmouseleave} 
            onClick={onClick}
            thumb={movie.thumb}
            move={move}
        />
    );
}

const MovieList = ({setState}) => {
    const [division, setDivision] = useState('all');

    const onClick = (e) => {
        setDivision(e.target.id);
    }

    return(
        <>
            <MovieSwitch>
                <div><span data-hover="All" onClick={onClick} id='all'>All</span></div>
                <div><span data-hover="Korean" onClick={onClick} id='k'>Korean</span></div>
                <div><span data-hover="Foreign" onClick={onClick} id='f'>Foreign</span></div>
            </MovieSwitch>
            <MovieListBlock>
                {movieList.map((movie) => {
                    if(division === 'all' || movie.division === division)
                    return (
                        <Movie 
                            movie={movie} 
                            key={movie.id} 
                            setState={setState} 
                        />
                    )
                    else return false;
                })}
            </MovieListBlock>
        </>
    );
}

export default MovieList;