import React, {useState} from 'react';
import MovieList from './components/MovieList';
import PopUp from './components/PopUp';

function App() {
  const [state, setState] = useState({
    state: false,
    movie: null
  });
  
  return (
    <>
      {state.state 
      ? <PopUp movie={state.movie} setState={setState}/> 
      : <MovieList setState={setState} />}
    </>
  );
}

export default App;
