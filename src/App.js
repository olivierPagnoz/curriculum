import './App.css';
import Hautcontent from './composamts/Hautcontent';
import Bascontent from './composamts/Bascontent';

function App() {
  return (
    <div className="App">
      <div className='hautgrid'><Hautcontent /></div>
      <div className='basgrid'><Bascontent /></div>
    </div>
  );
}

export default App;
