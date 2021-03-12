import React from 'react';

const PopUp = ( {movie, setState} ) => {

    const onClick = () => {
        setState({
            state: false,
            movie: {}
        });
    }

    return (
        <>
            <img alt="Movie" src={movie.thumb} onClick="#"/>
            <div>
                <h1>{movie.title}</h1>
                <p>{movie.description}</p>
            </div>
            <button onClick={onClick}>Exit</button>
        </>
    );
}

export default PopUp;