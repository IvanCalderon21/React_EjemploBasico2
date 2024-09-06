import './App.css';
import CalculatorComponent from './components/CalculatorComponent';
import TitleComponent from './components/TitleComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TitleComponent />
      </header>

      <main>
        <CalculatorComponent />

      </main>

    </div>
  );
}

export default App;
