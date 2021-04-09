import React, {useState} from 'react';
import styled from 'styled-components';
import ReactCardFlip from 'react-card-flip';
import HalfRating from './Rating';

const SelectedMovieCardFront = styled.div`
    width: 400px;
    height: 600px;
    display: inline-block;

    background-size: 400px;    
    border-radius: 10px;
	box-shadow: 0 0 16px #000; 
    cursor: pointer;
    
    ${({thumb, brightness}) =>  
        `opacity : ${brightness}%;
        background-image: url('https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${thumb}')`
    }
`;

const SelectedMovieCardBack = styled.div`
    width: 400px;
    height: 600px;
    display: inline-block;

    background-size: 400px;    
    background-color: #222222;
    border-radius: 10px;
	box-shadow: 0 0 16px #000; 
    cursor: pointer;    
`;

const SelectedMoviePoster = ({ num, thumb }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [brightness, setBrightness] = useState(100);

    const onMouseMove = function(e) {
        setBrightness(70);
    };

    const onMouseLeave = function() {
        setBrightness(100);
    };

    const onPosterClick = (e) => {
        setIsFlipped(!isFlipped);
    };

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <div>
                <SelectedMovieCardFront
                    onMouseMove={onMouseMove}
                    onMouseLeave={onMouseLeave}
                    onClick={onPosterClick}
                    isFlipped={isFlipped}
                    brightness={brightness}
                    thumb={thumb}
                >
                </SelectedMovieCardFront>
            </div>
            <div>
                <SelectedMovieCardBack
                    onMouseMove={onMouseMove}
                    onMouseLeave={onMouseLeave}
                    onClick={onPosterClick}
                    isFlipped={isFlipped}
                    brightness={brightness}
                >
                    <HalfRating
                        num={num}
                    />
                </SelectedMovieCardBack>
            </div>
        </ReactCardFlip>
    );
};

export default SelectedMoviePoster;