import React, {useState} from 'react';
import styled from 'styled-components';
import MovieList from '../containers/MovieList';

const MovieSwitch = styled.section`
    text-align: center;
    padding: 50px 0 30px;
    display: flex;
    justify-content: center;
    div{
	    overflow: hidden;
        color: #fff;
        text-align: center;
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

const MainPage = ({setState}) => {
    const [division, setDivision] = useState(
        {
            id: 1,
            nav_id: 'popular',
            text: 'Popular',
            title: '인기 영화'
        }
    );
 
    const navClick = (nav) => {
        setDivision(nav);
    }
        
    const navList = [
        {
            id: 1,
            nav_id: 'popular',
            text: 'Popular',
            title: '인기 영화'
        },
        {
            id: 2,
            nav_id: 'top_rated',
            text: 'TopRated',
            title: '높은 평점'
        },
        {
            id: 3,
            nav_id: 'now_playing',
            text: 'NowPlaying',
            title: '상영중인 영화'
        },
        {
            id: 4,
            nav_id: 'upcoming',
            text: 'UpComing',
            title: '개봉 예정'
        }
    ];

    return(
        <>
            <MovieSwitch>
                {navList.map((nav)=>
                    <div key={nav.id}>
                        <span data-hover={nav.text} onClick={()=>navClick(nav)}>{nav.text}</span>
                    </div>
                )}
            </MovieSwitch>
            <MovieList division={division} setState={setState}/>
        </>
    );
}

export default MainPage;