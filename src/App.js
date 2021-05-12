import logo from './logo.svg';
import './App.css';
import CatFact from './components/CatFact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Fetch demo med Redux</h1>
      </header>
      <main>
        <h2> Some facts! </h2>
        <CatFact />
      </main>
    </div>
  );
}

export default App;
