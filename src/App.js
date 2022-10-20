import './App.css';
import Board from './Pages/Board/Board';
import FooterSec from './Pages/FooterSec/FooterSec';
import TopText from './Pages/TopText/TopText';

function App() {
  return (
    <div className="container-fluid app">
      <TopText />
      <Board />
      <FooterSec />
    </div>
  );
}

export default App;
