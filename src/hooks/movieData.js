import {useState, useEffect} from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie';
axios.defaults.params = {api_key: '30d18357fffa4ad0a9ba91c89e3b5679'};

const MovieData = (search) =>{

    const [movieList, setMovieList] = useState(null);
    
    useEffect(()=> {
        let params = {language:'ko-KR'}
        axios.get(`/${search}`, {params})
        .then((response)=>{
            setMovieList(response.data.results);
            return movieList;
        })
    }, [search]);
    
    return movieList;
};

export default MovieData;