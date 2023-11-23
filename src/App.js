import './App.css';
import { WatchesWidget } from './components/WatchesWidget/WatchesWidget';

function App() {
  return (
    <div className="app">
      <h1 className='app__header'>Мировые часы</h1> 
      <WatchesWidget />
    </div>
  );
}

export default App;
