
import './App.css';
import { Form } from './components/Form';
import { Hello } from './components/Hello';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello firstName="Nick" lastName="Morgan" />
        <Form/>
      </header>
    </div>
  );
}

export default App;
