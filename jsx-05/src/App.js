import './App.css';

const sum = (a ,b ) => a+b
const resutl = <span> the result is {sum(11, 22)} </span>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2> {resutl} </h2>
        
        
      </header>
    </div>
  );
}

export default App;