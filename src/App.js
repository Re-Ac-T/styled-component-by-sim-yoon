import React, {useState} from 'react';
import MainPage from './pages/MainPage';
import PopUp from './pages/PopUp';

function App() {
  const [state, setState] = useState({
    state: false,
    movie: null
  });
  
  return (
    <>
      {state.state 
      ? <PopUp movie={state.movie} setState={setState}/> 
      : <MainPage setState={setState} />}
    </>
  );
}

export default App;
