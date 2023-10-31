import './App.css';
import logo from './holberton-logo.jpg'
import { getFullYear, getFooterCopy } from './utils.js'

function App() {
  return (
    <><header className="App-header">
      <img src={logo} alt="logo" />
      <h1>School dashboard</h1>
    </header><body className="App-body">
        <p>Login to access the full dashboard</p>
      </body><footer className="App-footer">
        <p>{getFullYear()} {getFooterCopy(false)}</p>
      </footer></>
  );
}

export default App;
