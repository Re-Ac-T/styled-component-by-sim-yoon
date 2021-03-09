import React, {useState} from 'react';
import MovieList from './components/MovieList';

function App() {
  const [state, setState] = useState({
    state: false,
    movie: {}
  });
  
  return (
    <>
      <MovieList setState={setState} />
      {state.state && console.log(state.movie)}
      {/* 바로 위 콘솔 지우시고 콘솔부분에 희구님 컴포넌트이름 넣어서 아래처럼 사용하시면 됩니당! */}
      {/* <컴포넌트이름 movie={state.movie} /> */}
    </>
  );
}

export default App;
