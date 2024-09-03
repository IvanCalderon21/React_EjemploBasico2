import './App.css';
import CalculatorComponent from './components/CalculatorComponent';
import TitleComponent from './components/TitleComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TitleComponent />
      </header>

      <body>
        <CalculatorComponent />

      </body>

    </div>
  );
}

export default App;
