import './App.css';
import Board from './Pages/Board/Board';

function App() {
  return (
    <div className="container App">
      <div className='p-5'> 
        <h2>Hellow Prow <strong>Gamer's .</strong></h2>
        <h5>Leats Play <strong>Tic Tac Toe</strong> Game</h5>
      </div>
      <Board></Board>
    </div>
  );
}

export default App;
